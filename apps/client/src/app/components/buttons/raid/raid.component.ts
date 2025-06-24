import { Component, OnDestroy, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { GoComponent } from '../go/go.component';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
    selector: 'app-raid',
    imports: [GoComponent],
    providers: [DecimalPipe],
    templateUrl: './raid.component.html',
    styleUrl: './raid.component.scss'
})
export class RaidComponent implements OnDestroy {
  timeLeft: string = '';
  avalaibleTroopers: number = 16;
  tryLeft: string = '';

  private decimalPipe = inject(DecimalPipe);
  private destroyed$: Subject<void> = new Subject();

  ngOnInit(): void {
    if (this.avalaibleTroopers == 0) {
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
      'Encore ' +
      this.avalaibleTroopers +
      ' recrues disponibles pour le raid !';
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

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
