
import { Component, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Trooper } from '@minitroopers/prisma';
import { PartialUserExtended } from '@minitroopers/shared';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { IconContainerComponent } from 'src/app/components/containers/container-icon/container-icon.component';
import { TrooperChoiceComponent } from 'src/app/components/trooper/trooper-choice/trooper-choice.component';
import { TrooperSkillsComponent } from 'src/app/components/trooper/trooper-skills/trooper-skills.component';
import { TroopersBlockComponent } from 'src/app/components/trooper/troopers-block/troopers-block.component';
import { AuthService } from 'src/app/services/auth.service';
import { BackendService } from 'src/app/services/backend.service';
import { PrefixArmy } from '../signup/signup.component';

@Component({
  selector: 'app-view-upgrade',
  imports: [
    IconContainerComponent,
    TroopersBlockComponent,
    TrooperSkillsComponent,
    TrooperChoiceComponent
],
  templateUrl: './view-upgrade.component.html',
  styleUrl: './view-upgrade.component.scss',
})
export class ViewUpgradeComponent implements OnInit {
  public prefixs = PrefixArmy;
  public selectedTrooper: Trooper | undefined = undefined;
  public displaySkill: boolean = true;

  user: PartialUserExtended | null = null;
  isEdtiable: boolean = false;

  private destroyed$: Subject<void> = new Subject();

  public authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private backendService = inject(BackendService);

  constructor() {
    this.onNav();

    this.router.events
      .pipe(
        filter((event) => event && event instanceof NavigationEnd),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => {
        this.onNav();
      });
  }

  ngOnInit(): void {
    this.authService.onConnected$
      .pipe(takeUntilDestroyed())
      .subscribe((user) => {
        this.checkOwner();
      });
  }

  onNav() {
    let trooperId: string | undefined = undefined;
    let army: string | undefined = undefined;
    if (
      this.route.snapshot.params['army'] != null &&
      this.route.snapshot.params['trooper'] != null
    ) {
      trooperId = this.route.snapshot.params['trooper'];
      army = this.route.snapshot.params['army'];
      this.init(army, trooperId);
    }
  }

  init(army?: string | undefined, trooperId?: string | undefined) {
    this.reset();
    this.isEdtiable = false;

    if (army && trooperId) {
      this.checkOwner();

      if (
        this.authService.user &&
        this.authService.user.armyName == this.route.snapshot.params['army']
      ) {
        this.user = this.authService.user;
        this.selectedTrooper = this.user.troopers.find(
          (x) => x.id == trooperId,
        );
        this.isEdtiable = true;
      } else {
        this.getCurrentArmy(army, trooperId);
      }
    }
  }

  getCurrentArmy(army: string, trooperId: string) {
    if (army != null) {
      this.backendService
        .getArmy(army, true)
        .pipe(take(1))
        .subscribe((army) => {
          if (army) {
            this.user = army;
            this.selectedTrooper = this.user.troopers.find(
              (x) => x.id == trooperId,
            );
            this.checkOwner();
          }
        });
    }
  }

  checkOwner() {
    if (
      this.authService.user &&
      this.authService.user.armyName == this.route.snapshot.params['army']
    ) {
      this.isEdtiable = true;
    } else {
      this.isEdtiable = false;
    }
  }

  switchButton() {
    this.displaySkill = false;
  }

  onReturn() {
    this.displaySkill = true;
  }

  updatedTrooper(updatedTrooper: Trooper) {
    this.selectedTrooper = updatedTrooper;
  }

  reset() {
    this.selectedTrooper = undefined;
    this.displaySkill = true;
    this.isEdtiable = false;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  // on change formgroup debounce update ws
}
