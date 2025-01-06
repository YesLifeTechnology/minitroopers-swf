import { CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonState } from '@minitroopers/shared';
import { FightComponent } from '../fight/fight.component';
import { GoComponent } from '../go/go.component';

@Component({
    selector: 'app-missions',
    imports: [CommonModule, GoComponent],
    providers: [DecimalPipe],
    templateUrl: './../fight/fight.component.html',
    styleUrls: ['./../fight/fight.component.scss', './missions.component.scss']
})
export class MissionsComponent extends FightComponent {
  override getButtonState() {
    return ['pending', 'pending', 'pending'] as ButtonState[]; // <---- change get for mission
  }

  override getTryLeft() {
    this.tryLeft =
      'Il te reste ' + this.pendingLeft + ' essais pour la mission du jour !';
  }
}
