import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonState } from '@minitroopers/shared';

@Component({
    selector: 'app-go',
    imports: [],
    templateUrl: './go.component.html',
    styleUrl: './go.component.scss'
})
export class GoComponent implements OnInit {
  @Input() state: ButtonState = 'pending';
  @Output() eventClick: EventEmitter<MouseEvent> = new EventEmitter();

  image: string = '';

  ngOnInit(): void {
    switch (this.state) {
      case 'lose':
        this.image = '/assets/images/bdefeat.webp';
        break;
      case 'pending':
        this.image = '/assets/images/bgo.gif';
        break;
      case 'win':
        this.image = '/assets/images/bwin.webp';
        break;
    }
  }

  onClick(event: MouseEvent) {
    this.eventClick.emit(event);
  }
}
