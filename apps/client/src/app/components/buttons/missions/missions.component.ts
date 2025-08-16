import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MissionType } from '@minitroopers/prisma/client';
import { ButtonState, getMissionState } from '@minitroopers/shared';
import { take } from 'rxjs';
import { FightService } from 'src/app/services/fight.service';
import { FightComponent } from '../fight/fight.component';
import { GoComponent } from '../go/go.component';

@Component({
  selector: 'app-missions',
  imports: [CommonModule, GoComponent],
  providers: [DecimalPipe],
  templateUrl: './../fight/fight.component.html',
  styleUrls: ['./../fight/fight.component.scss', './missions.component.scss'],
})
export class MissionsComponent extends FightComponent {
  @Input() type: MissionType = 'exterminate';

  lock: boolean = false;

  private fightService = inject(FightService);

  override getTryLeft() {
    this.tryLeft =
      'Il te reste ' + this.pendingLeft + ' essais pour la mission du jour !';
  }

  override getButtonState(): ButtonState[] {
    switch (this.type) {
      case 'exterminate':
        if (this.user.exterminationUnlockAt == null) {
          return ['unlock'];
        }
        break;
      case 'infiltrate':
        if (this.user.infiltrationUnlockAt == null) {
          return ['unlock'];
        }
        break;
      case 'epic':
        if (this.user.epicUnlockAt == null) {
          return ['unlock'];
        }
        break;
    }

    return getMissionState(this.user.missions, this.type);
  }

  override onClick(event: MouseEvent, state: ButtonState, index: number) {
    event.stopPropagation();

    switch (state) {
      case 'win':
      case 'lose':
        if (this.armyStore.army()?.missions?.length) {
          const misison = [
            ...this.user?.missions.filter((x) => x.type == this.type),
          ].reverse()[index];
          this.router.navigate(['/war', misison.id], {
            state: { fight: misison },
          });
        }
        break;
      case 'pending':
        if (this.armyStore.isOwner() && !this.lock) {
          this.lock = true;
          this.fightService
            .createMission(this.type)
            .pipe(take(1))
            .subscribe((reponse) => {
              if (reponse?.fightId && typeof reponse.fightId === 'string') {
                this.router.navigate(['/mission', reponse.fightId]);
              }
            });
        }
        break;
      case 'unlock':
        if (this.armyStore.isOwner()) {
          if (this.armyStore.army()!.gold >= 5) {
            this.armyStore.unlockMission((this as any).type);
          } else {
            this.notificationService.notify(
              'error',
              "Pas assez d'argent pour débloquer la mission",
            );
          }
        }
        break;
      case 'hidden':
        break;
    }
  }
}
