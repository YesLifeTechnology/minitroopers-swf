import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Trooper } from '@minitroopers/prisma';
import { PartialUserExtended } from '@minitroopers/shared';
import { Subject, filter, takeUntil } from 'rxjs';
import { IconContainerComponent } from 'src/app/components/containers/container-icon/container-icon.component';
import { TrooperChoiceComponent } from 'src/app/components/trooper/trooper-choice/trooper-choice.component';
import { TrooperSkillsComponent } from 'src/app/components/trooper/trooper-skills/trooper-skills.component';
import { TroopersBlockComponent } from 'src/app/components/trooper/troopers-block/troopers-block.component';
import { AuthService } from 'src/app/services/auth.service';
import { PrefixArmy } from '../signup/signup.component';

@Component({
  selector: 'app-view-upgrade',
  standalone: true,
  imports: [
    IconContainerComponent,
    TroopersBlockComponent,
    TrooperSkillsComponent,
    TrooperChoiceComponent,
    CommonModule,
  ],
  templateUrl: './view-upgrade.component.html',
  styleUrl: './view-upgrade.component.scss',
})
export class ViewUpgradeComponent {
  public prefixs = PrefixArmy;
  public selectedTrooper: Trooper | undefined = undefined;
  public displaySkill: boolean = true;

  user: PartialUserExtended | null = null;
  isEdtiable: boolean = false;

  private destroyed$: Subject<void> = new Subject();

  public authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

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

  onNav() {
    let trooperId: string | undefined = undefined;
    if (
      this.route.snapshot.params['army'] != null &&
      this.route.snapshot.params['trooper'] != null
    ) {
      trooperId = this.route.snapshot.params['trooper'];
      this.init(trooperId);
    }
  }

  init(trooperId?: string | undefined, byUrl: boolean = false) {
    this.reset();

    if (trooperId) {
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
        // not logued get army + trooper
      }
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
