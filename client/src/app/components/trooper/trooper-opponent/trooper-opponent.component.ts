import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PartialUserExtended } from '@minitroopers/shared';
import { ArmyNameComponent } from '../../containers/army-name/army-name.component';
import { TroopersGridComponent } from '../troopers-grid/troopers-grid.component';

@Component({
  selector: 'app-trooper-opponent',
  standalone: true,
  imports: [CommonModule, ArmyNameComponent, TroopersGridComponent],
  templateUrl: './trooper-opponent.component.html',
  styleUrl: './trooper-opponent.component.scss',
})
export class TrooperOpponentComponent {
  @Input() opponent!: PartialUserExtended;
  @Input() lock: boolean = false;
  @Output() opponentSelected: EventEmitter<string> = new EventEmitter();

  onClick(event: MouseEvent, opponentName: string) {
    event.stopPropagation();

    if (!this.lock) {
      this.opponentSelected.emit(opponentName);
    }
  }
}
