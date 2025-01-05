import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-ad',
  standalone: true,
  imports: [],
  templateUrl: './container-ad.component.html',
  styleUrl: './container-ad.component.scss',
})
export class ContainerAdComponent {
  @Input() image: string = '';
  @Input() link: string = '';

  adClicked() {
    // stats
    // go to url
  }
}
