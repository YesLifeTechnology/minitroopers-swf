import { DecimalPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subject, takeUntil } from 'rxjs';
import { FightService } from 'src/app/services/fight.service';
import { ArmyStore } from 'src/app/stores/army.store';
import { GoComponent } from '../go/go.component';

@Component({
  selector: 'app-raid',
  imports: [GoComponent],
  providers: [DecimalPipe],
  templateUrl: './raid.component.html',
  styleUrl: './raid.component.scss',
})
export class RaidComponent implements OnDestroy {
  timeLeft: string = '';
  tryLeft: string = '';

  raidTroopers: number = 0;

  private fightService = inject(FightService);
  public armyStore = inject(ArmyStore);

  private decimalPipe = inject(DecimalPipe);
  private router = inject(Router);
  private destroyed$: Subject<void> = new Subject();

  ngOnInit(): void {
    this.loadAvailableTroopers();
  }

  loadAvailableTroopers() {
    this.fightService.getTroopersRaid().subscribe((troopers) => {
      this.raidTroopers = troopers.length;
      this.applyLogic();
    });
  }

  applyLogic() {
    if (this.raidTroopers == 0 || this.armyStore.army()!.raids?.length >= 20) {
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

  getTryLeft() {
    this.tryLeft =
      'Encore ' + this.raidTroopers + ' recrues disponibles pour le raid !';
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

  onClick(event: MouseEvent) {
    event.stopPropagation();
    if (this.armyStore.isOwner()) {
      this.fightService.createRaid().subscribe((result) => {
        console.log(result);
        if (result.raidId) {
          this.router.navigate(['raid', result.raidId], {
            state: { swfData: result.swfData },
          });
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
