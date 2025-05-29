
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartialUserExtended } from '@minitroopers/shared';
import { take } from 'rxjs';
import { ArmyNameComponent } from 'src/app/components/containers/army-name/army-name.component';
import { IconContainerComponent } from 'src/app/components/containers/container-icon/container-icon.component';
import { TrooperOpponentComponent } from 'src/app/components/trooper/trooper-opponent/trooper-opponent.component';
import { TroopersBlockComponent } from 'src/app/components/trooper/troopers-block/troopers-block.component';
import { AuthService } from 'src/app/services/auth.service';
import { FightService } from 'src/app/services/fight.service';

@Component({
    selector: 'app-opponents',
    imports: [
    IconContainerComponent,
    TroopersBlockComponent,
    TrooperOpponentComponent,
    ArmyNameComponent
],
    templateUrl: './opponents.component.html',
    styleUrl: './opponents.component.scss'
})
export class OpponentsComponent implements OnInit {
  opponents: PartialUserExtended[] = [];
  loadingOpponents: boolean = true;
  lockOpponents: boolean = false;

  public authService = inject(AuthService);
  private fightService = inject(FightService);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadingOpponents = true;
    this.fightService
      .getOpponents()
      .pipe(take(1))
      .subscribe((opponents) => {
        this.opponents = opponents;
        this.opponents.sort((a, b) => a.troopers.length - b.troopers.length);
        this.loadingOpponents = false;
      });
  }

  onOpponentSelected(opponent: string) {
    this.lockOpponents = true;
    this.fightService
      .createFight(opponent)
      .pipe(take(1))
      .subscribe((reponse) => {
        if (reponse?.fightId && typeof reponse.fightId === 'string') {
          this.router.navigate(['/war', reponse.fightId]);
        }
      });
  }
}
