import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Trooper } from '@minitroopers/prisma';
import { filter } from 'rxjs';
import { TrooperChoiceComponent } from 'src/app/components/trooper/trooper-choice/trooper-choice.component';
import { TrooperSkillsComponent } from 'src/app/components/trooper/trooper-skills/trooper-skills.component';
import { ArmyStore } from 'src/app/stores/army.store';
import { PrefixArmy } from '../signup/signup.component';

@Component({
  selector: 'app-view-upgrade',
  imports: [TrooperSkillsComponent, TrooperChoiceComponent],
  templateUrl: './view-upgrade.component.html',
  styleUrl: './view-upgrade.component.scss',
})
export class ViewUpgradeComponent {
  public prefixs = PrefixArmy;
  public displaySkill: boolean = true;

  public selectedTrooper = signal<Trooper | undefined>(undefined);

  public armyStore = inject(ArmyStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event && event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        if (this.route.snapshot.params['trooper']) {
          const trooper = this.armyStore
            .army()
            ?.troopers.find(
              (x) => x.id == this.route.snapshot.params['trooper'],
            );
          if (trooper) {
            this.selectedTrooper.set(trooper);
          } else {
            this.reset();
          }
        }
      });
  }

  switchButton() {
    this.displaySkill = false;
  }

  onReturn() {
    this.displaySkill = true;
  }

  updatedTrooper(updatedTrooper: Trooper) {
    this.selectedTrooper.set(updatedTrooper);
  }

  reset() {
    this.selectedTrooper.set(undefined);
    this.displaySkill = true;
  }

  // on change formgroup debounce update ws
}
