import { Component, inject, OnDestroy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Trooper } from '@minitroopers/prisma';
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
export class ViewUpgradeComponent implements OnDestroy {
  public prefixs = PrefixArmy;
  public displaySkill: boolean = true;

  public selectedTrooper = signal<Trooper | undefined>(undefined);

  public armyStore = inject(ArmyStore);
  private route = inject(ActivatedRoute);

  constructor() {
    this.route.url.pipe(takeUntilDestroyed()).subscribe(() => {
      console.log('DDDD');
      if (this.route.snapshot.params['trooper']) {
        const trooper = this.armyStore
          .army()
          ?.troopers.find((x) => x.id == this.route.snapshot.params['trooper']);
        if (trooper) {
          this.selectedTrooper.set(trooper);
          this.armyStore.setTitle('Fiche de ' + trooper.name);
        } else {
          this.reset();
        }
      }
    });
  }

  switchButton() {
    this.displaySkill = false;
    this.armyStore.setTitle('Choisir une compétence');
  }

  onReturn() {
    this.displaySkill = true;
  }

  updatedTrooper(updatedTrooper: Trooper) {
    this.selectedTrooper.set(updatedTrooper);
    this.armyStore.setTitle('Fiche de ' + updatedTrooper.name);
  }

  reset() {
    this.selectedTrooper.set(undefined);
    this.displaySkill = true;
  }

  ngOnDestroy(): void {
    this.armyStore.resetTitle();
  }

  // on change formgroup debounce update ws
}
