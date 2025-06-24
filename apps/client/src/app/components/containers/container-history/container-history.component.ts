import { DecimalPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { getAddCost } from '@minitroopers/shared';
import { GetArmyNamePipe } from 'src/app/pipes/getArmyName.pipe';
import { ArmyStore } from 'src/app/stores/army.store';

@Component({
  selector: 'app-container-history',
  providers: [DecimalPipe, GetArmyNamePipe],
  imports: [GetArmyNamePipe],
  templateUrl: './container-history.component.html',
  styleUrl: './container-history.component.scss',
})
export class ContainerHistoryComponent {
  private decimalPipe = inject(DecimalPipe);
  private armyStore = inject(ArmyStore);
  private router = inject(Router);

  public histories = computed(() => {
    let hist =
      this.armyStore.army()?.history?.map((history) => {
        let newHist = { ...history } as any;
        newHist.date = this.tsToDate(new Date(history.ts).getTime());
        if (newHist.type == 'recruit') {
          if (!newHist.options) {
            newHist.options = {};
          }
          newHist.options.clickable = true;
          newHist.options.url = '/' + (newHist as any).options.armyName;
        } else if (newHist.type == 'war' && newHist.options?.fightId) {
          newHist.options.clickable = true;
          newHist.options.url = '/war/' + newHist.options?.fightId;
        }
        return newHist;
      }) ?? [];

    if (
      this.armyStore.army() &&
      this.armyStore.army()!.gold >=
        getAddCost(this.armyStore.army()!.troopers.length) &&
      this.armyStore.isOwner()
    ) {
      hist.unshift({
        ts: new Date(),
        type: 'trooperAvailable',
        id: '',
        date: this.tsToDate(Date.now()),
        options: {
          clickable: this.armyStore.isOwner(),
          url: this.armyStore.currentArmyName() + '/add',
        },
        userId: '',
      });
    }

    return hist;
  });

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
