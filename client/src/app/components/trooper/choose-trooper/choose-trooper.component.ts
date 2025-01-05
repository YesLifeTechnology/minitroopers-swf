import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TrooperDay } from '@minitroopers/prisma';
import { TrooperCellComponent } from '../trooper-cell/trooper-cell.component';

@Component({
  selector: 'app-choose-trooper',
  standalone: true,
  imports: [CommonModule, TrooperCellComponent],
  templateUrl: './choose-trooper.component.html',
  styleUrl: './choose-trooper.component.scss',
})
export class ChooseTrooperComponent {
  @Input() troopers: TrooperDay[] = [];
  @Input() formGroup!: FormGroup<string>;
  @Input() groupColor: number | undefined = undefined;

  selectedTrooper: string | undefined = undefined;

  onSelect(trooperId: string) {
    if (this.formGroup.enabled) {
      this.selectedTrooper = trooperId;
      this.formGroup.get('trooper')?.setValue(trooperId);
    }
  }
}
