import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-icon',
  standalone: true,
  imports: [],
  templateUrl: './container-icon.component.html',
  styleUrl: './container-icon.component.scss',
})
export class IconContainerComponent {
  @Input() icon: string = '';
  @Input() value: number = 0;
}
