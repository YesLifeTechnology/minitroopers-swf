import { DecimalPipe } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  ButtonState,
  PartialUserExtended,
  getFightState,
} from '@minitroopers/shared';
import { Subject, interval, takeUntil } from 'rxjs';
import { ArmyStore } from 'src/app/stores/army.store';
import { GoComponent } from '../go/go.component';

@Component({
  selector: 'app-fight',
  imports: [GoComponent],
  providers: [DecimalPipe],
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss',
})
export class FightComponent implements OnChanges, OnDestroy {
  @Input() user!: PartialUserExtended;

  states: ButtonState[] = [
    'pending',
    'pending',
    'pending',
    'pending',
    'pending',
  ];

  pendingLeft: number = this.states.length;
  timeLeft: string = '';
  tryLeft: string = '';

  private decimalPipe = inject(DecimalPipe);
  private router = inject(Router);
  private armyStore = inject(ArmyStore);
  private destroyed$: Subject<void> = new Subject();

  ngOnChanges(): void {
    if (this.user) {
      this.states = this.getButtonState();
      this.pendingLeft = this.states.filter((x) => x == 'pending').length;

      if (this.pendingLeft == 0) {
        this.buildTimeLeft();
        interval(60000)
          .pipe(takeUntil(this.destroyed$))
          .subscribe(() => {
            this.buildTimeLeft();
          });
      } else {
        this.getTryLeft();
      }
    }
  }

  getButtonState() {
    //FightPartial
    return getFightState(this.user.fights);
  }

  getTryLeft() {
    this.tryLeft =
      'Il te reste ' + this.pendingLeft + " batailles aujourd'hui !";
  }

  buildTimeLeft() {
    const diff = new Date().setHours(23, 59, 59, 0) - Date.now();

    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    this.timeLeft =
      this.decimalPipe.transform(hours, '2.0-0') +
      'h ' +
      this.decimalPipe.transform(minutes, '2.0-0') +
      'm';
  }

  onClick(event: MouseEvent, state: ButtonState, index: number) {
    event.stopPropagation();

    switch (state) {
      case 'win':
      case 'lose':
        if (this.armyStore.army()?.fights?.length) {
          const fight = [...this.user?.fights].reverse()[index];
          this.router.navigate(['/war', fight.id], {
            state: { fight: fight },
          });
        }
        break;
      case 'pending':
        if (this.armyStore.isOwner()) {
          this.router.navigate(['/' + this.user.armyName, 'war']);
        }
        break;
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
