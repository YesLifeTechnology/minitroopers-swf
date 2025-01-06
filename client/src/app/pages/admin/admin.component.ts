import { Component } from '@angular/core';
import { DebugComponent } from 'src/app/components/containers/container-debug/container-debug.component';

@Component({
  selector: 'app-admin',
  imports: [DebugComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
