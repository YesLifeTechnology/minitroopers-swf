
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-command-button',
    imports: [RouterModule],
    templateUrl: './command-button.component.html',
    styleUrl: './command-button.component.scss'
})
export class CommandButtonComponent {
  @Input() type: 'blue' | 'orange' | 'green' = 'blue';
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  onClicked(e: MouseEvent) {
    e.stopPropagation();
    if (!this.disabled) {
      this.clicked.emit(true);
    }
  }
}
