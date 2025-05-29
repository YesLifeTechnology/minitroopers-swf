
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrooperDay } from '@minitroopers/prisma';
import { PartialUserExtended, statusAvailability } from '@minitroopers/shared';
import { Subject, debounceTime, switchMap, take, takeUntil } from 'rxjs';
import { ContainerBlueLargeComponent } from 'src/app/components/containers/container-blue-large/container-blue-large.component';
import { ContainerBlueComponent } from 'src/app/components/containers/container-blue/container-blue.component';
import { ChooseTrooperComponent } from 'src/app/components/trooper/choose-trooper/choose-trooper.component';
import { AuthService } from 'src/app/services/auth.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-signup',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ContainerBlueComponent,
    ContainerBlueLargeComponent,
    ChooseTrooperComponent
],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit, OnDestroy {
  public prefixes = Object.entries(PrefixArmy).map((x) => {
    return {
      value: Number(x[0]),
      label: x[1],
    };
  });

  public signupForm: FormGroup = new FormGroup({
    army: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z ]*$/),
    ]),
    prefix: new FormControl(this.prefixes[0].value, [Validators.required]),
    color: new FormControl(Math.floor(Math.random() * 6), Validators.required),
    trooper: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
    referralName: new FormControl(null, Validators.required),
  });

  public createdUrl: string | null = null;

  public get army() {
    return this.signupForm.get('army');
  }

  public get trooper() {
    return this.signupForm.get('trooper');
  }

  public availabilityState: statusAvailability = 'loading';

  public readonly AvailabilyStateColor = {
    loading: 'gray',
    available: '#03dd03',
    error: 'red',
  };

  public displayedTroopers: TrooperDay[] = [];

  public availableColors: string[] = [
    '#E87D5F',
    '#FFAA27',
    '#FFDB7F',
    '#96B732',
    '#9EADEF',
    '#A55DC6',
  ];

  public lockSubmit: boolean = false;

  public referralUser: PartialUserExtended | undefined = undefined;

  private checkAvailability$: Subject<string> = new Subject();

  private backendService = inject(BackendService);
  public authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private destroyed$: Subject<void> = new Subject();

  ngOnInit(): void {
    this.backendService
      .getTodayTroopers()
      .pipe(take(1))
      .subscribe((troopers: TrooperDay[]) => {
        this.displayedTroopers = troopers;
      });

    let referralArmy: string = this.route.snapshot.params['army'];

    if (!referralArmy && localStorage.getItem('referral') != null) {
      referralArmy = localStorage.getItem('referral') as string;
    }

    if (referralArmy) {
      this.backendService
        .getArmy(referralArmy)
        .pipe(take(1))
        .subscribe((user) => {
          if (user?.armyName) {
            this.referralUser = user;
            localStorage.setItem('referral', referralArmy);
          }
        });
    }

    if (
      !referralArmy &&
      this.authService.user &&
      this.authService.user.troopers?.length
    ) {
      this.router.navigate(['/' + this.authService.user.armyName]);
    } else if (
      !this.authService.user ||
      (this.authService.user &&
        referralArmy &&
        referralArmy?.toLowerCase() ==
          this.authService.user?.armyName.toLowerCase())
    ) {
      this.signupForm.disable();
    }

    const codeUrl = this.route.snapshot.queryParamMap.get('code');
    if (codeUrl && !this.authService.user && !this.authService.authing) {
      this.authService.authing = true;

      this.authService
        .getFromToken(codeUrl)
        .pipe(take(1))
        .subscribe((user) => {
          this.signupForm.get('userId')?.setValue(user.id);
          this.signupForm.enable();

          if (user.troopers?.length) {
            this.router.navigate(['/' + user.armyName]);
          }
        });

      this.init();
    } else {
      this.authService.signIn().then((result) => {
        if (result && this.authService.user?.troopers?.length) {
          //&& !referralArmy
          this.router.navigate(['/' + this.authService.user.armyName]);
        }
        // else if (
        //   referralArmy &&
        //   referralArmy?.toLowerCase() ===
        //     this.authService.user?.armyName.toLowerCase()
        // ) {
        //   //allow view but disabled
        // }
        else {
          // this.signupForm.enable();
          // this.init();
        }
      });
    }
  }

  init(): void {
    this.checkAvailability$
      .pipe(takeUntil(this.destroyed$))
      .pipe(debounceTime(750))
      .pipe(
        switchMap((arg) => {
          this.availabilityState = 'loading';
          return this.backendService.checkAvailability(arg);
        }),
      )
      .subscribe((status: statusAvailability) => {
        this.availabilityState = status;
      });

    this.signupForm
      .get('army')
      ?.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((value: string) => {
        this.availabilityState = 'loading';
        if (value && value != '' && value.length > 3 && this.army?.valid) {
          this.createdUrl =
            'https://minitroopers.com/' +
            value
              .trim()
              .replace(/[^a-zA-Z ]/g, '')
              .replace(/\s/g, '')
              .toLocaleLowerCase();

          this.checkAvailability$.next(value);
        } else {
          this.createdUrl = null;
        }
      });
  }

  loginClicked(): void {
    this.authService.loginFromEternal();
  }

  createArmy() {
    if (
      !this.trooper?.value ||
      !this.army ||
      !this.army.value ||
      this.army.invalid ||
      this.availabilityState != 'available' ||
      this.lockSubmit ||
      this.signupForm.get('userId ')?.value === ''
    ) {
      return;
    }

    this.lockSubmit = true;

    if (this.referralUser) {
      this.signupForm.get('referralName')?.setValue(this.referralUser.armyName);
    }

    this.backendService
      .createUser(this.signupForm.getRawValue())
      .pipe(take(1))
      .subscribe((user) => {
        if (user.armyName) {
          this.authService.user = user;
          this.router.navigate(['/' + user.armyName]);
          this.lockSubmit = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

export const PrefixArmy: { [key: number]: string } = {
  0: 'de',
  1: "d'",
  2: 'du',
  3: 'de la',
  4: 'des',
  5: ' ',
};
