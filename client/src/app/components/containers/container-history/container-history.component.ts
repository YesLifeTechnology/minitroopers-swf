import { CommonModule, DecimalPipe } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { PartialUserExtended, getAddCost } from '@minitroopers/shared';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-container-history',
  standalone: true,
  providers: [DecimalPipe],
  imports: [CommonModule, DecimalPipe],
  templateUrl: './container-history.component.html',
  styleUrl: './container-history.component.scss',
})
export class ContainerHistoryComponent implements OnChanges {
  @Input() user!: PartialUserExtended;

  histories: any = [];

  private decimalPipe = inject(DecimalPipe);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnChanges(changes: SimpleChanges): void {
    this.histories =
      this.user?.history?.map((history) => {
        let newHist: (typeof this.histories)[number] = { ...history };
        newHist.date = this.tsToDate(new Date(history.ts).getTime());
        if (newHist.type == 'recruit') {
          if (!newHist.options) {
            newHist.options = {};
          }
          newHist.options.clickable = true;
          newHist.options.url = '/' + (newHist as any).options.armyName;
        } else if (
          0
          // newHist.type == 'war' &&
          // (newHist as FightHistory).options?.fightId
        ) {
          // newHist.options.clickable = true;
          // newHist.options.url =
          //   '/war/' + (newHist as FightHistory).options?.fightId;
        }
        return newHist;
      }) ?? [];

    if (this.user && this.user.gold >= getAddCost(this.user.troopers.length)) {
      this.histories.unshift({
        ts: new Date(),
        type: 'trooperAvailable',
        id: '',
        date: this.tsToDate(Date.now()),
        options: {
          clickable:
            this.authService.user != null &&
            this.user?.armyName == this.authService.user?.armyName,
          url: this.authService.user?.armyName + '/add',
        },
        userId: '',
      });
    }
  }

  tsToDate(ts: number): string {
    let date = new Date(ts);
    const now = new Date();
    const hours = this.decimalPipe.transform(date.getHours(), '2.0-0');
    const minutes = this.decimalPipe.transform(date.getMinutes(), '2.0-0');
    let returnDate: string = '';
    if (now.getDate() == date.getDate() && now.getMonth() == date.getMonth()) {
      returnDate = "Aujourd'hui";
    } else if (now.getDate() - 1 == date.getDate()) {
      returnDate = 'Hier';
    } else {
      returnDate =
        'Le' +
        ' ' +
        this.decimalPipe.transform(date.getDate(), '2.0-0') +
        '/' +
        this.decimalPipe.transform(date.getMonth() + 1, '2.0-0');
    }

    returnDate += ' ';
    returnDate += 'à';
    returnDate += ' ';

    returnDate += hours + ':' + minutes;

    return returnDate;
  }

  historyClicked(history: any) {
    if ((history.options as any)?.clickable && (history.options as any)?.url) {
      this.router.navigate([(history.options as any)?.url]);
    }
  }
}
