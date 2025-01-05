import { Component } from '@angular/core';
import { DebugComponent } from 'src/app/components/containers/container-debug/container-debug.component';
import { ContainerComponent } from 'src/app/layouts/container/container.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ContainerComponent, DebugComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
