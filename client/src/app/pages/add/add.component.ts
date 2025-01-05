import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrooperDay } from '@minitroopers/prisma';
import { getAddCost } from '@minitroopers/shared';
import { take } from 'rxjs';
import { CommandButtonComponent } from 'src/app/components/buttons/command-button/command-button.component';
import { IconContainerComponent } from 'src/app/components/containers/container-icon/container-icon.component';
import { ChooseTrooperComponent } from 'src/app/components/trooper/choose-trooper/choose-trooper.component';
import { TroopersBlockComponent } from 'src/app/components/trooper/troopers-block/troopers-block.component';
import { ContainerComponent } from 'src/app/layouts/container/container.component';
import { AuthService } from 'src/app/services/auth.service';
import { BackendService } from 'src/app/services/backend.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TrooperService } from 'src/app/services/trooper.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ContainerComponent,
    IconContainerComponent,
    TroopersBlockComponent,
    ChooseTrooperComponent,
    CommandButtonComponent,
    CommonModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent implements OnInit {
  public displayedTroopers: TrooperDay[] = [];

  public addForm: FormGroup = new FormGroup({
    trooper: new FormControl('', Validators.required),
  });

  private backendService = inject(BackendService);
  private trooperService = inject(TrooperService);
  private router = inject(Router);
  public authService = inject(AuthService);
  private notificationService = inject(NotificationService);

  addCost: number = 0;
  lock: boolean = false;

  ngOnInit(): void {
    this.backendService
      .getTodayTroopers()
      .pipe(take(1))
      .subscribe((troopers: TrooperDay[]) => {
        this.displayedTroopers = troopers;
      });

    if (this.authService.user) {
      this.addCost = getAddCost(this.authService.user.troopers.length);
    }
  }

  addNewTrooper() {
    if (
      !this.lock &&
      this.addForm.get('trooper')?.value &&
      this.authService.user
    ) {
      if (this.addCost <= 0) {
        this.notificationService.notify('error', 'Limit troopers');
      }
      if (this.addCost > 0 && this.authService.user.gold >= this.addCost) {
        this.lock = true;

        this.trooperService
          .addTrooper(this.addForm.get('trooper')?.value)
          .pipe(take(1))
          .subscribe(() => {
            if (this.authService.user) {
              this.router.navigate(['/' + this.authService.user.armyName]);
            }
          });
      } else if (
        this.authService.user.gold >= this.addCost &&
        this.addCost > 0
      ) {
        this.notificationService.notify('error', 'Not enought gold');
      }
    }
  }
}
