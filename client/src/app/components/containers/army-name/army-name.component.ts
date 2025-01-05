import { Component, Input } from '@angular/core';
import { PartialUserExtended } from '@minitroopers/shared';
import { GetArmyNamePipe } from 'src/app/pipes/getArmyName.pipe';

@Component({
  selector: 'app-army-name',
  standalone: true,
  imports: [GetArmyNamePipe],
  templateUrl: './army-name.component.html',
  styleUrl: './army-name.component.scss',
})
export class ArmyNameComponent {
  @Input() user: PartialUserExtended | undefined = undefined;
}
