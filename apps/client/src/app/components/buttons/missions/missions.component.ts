import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MissionType } from '@minitroopers/prisma/client';
import { ButtonState } from '@minitroopers/shared';
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
    return ['pending', 'pending', 'pending'];
    // return getMissionState(this.user.missions);
  }
}
