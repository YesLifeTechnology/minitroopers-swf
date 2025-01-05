import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trooper } from '@minitroopers/prisma';
import { AuthService } from 'src/app/services/auth.service';
import { CommandButtonComponent } from '../../buttons/command-button/command-button.component';
import { TroopersGridComponent } from '../troopers-grid/troopers-grid.component';

@Component({
  selector: 'app-troopers-block',
  standalone: true,
  imports: [TroopersGridComponent, CommandButtonComponent, CommonModule],
  templateUrl: './troopers-block.component.html',
  styleUrl: './troopers-block.component.scss',
})
export class TroopersBlockComponent {
  @Input() troopers: Trooper[] = [];
  @Input() context: 'global' | 'globalOwner' | 'navigation' = 'global';
  @Input() armyColor: number | undefined = undefined;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  public authService = inject(AuthService);

  backClicked() {
    if (this.authService.user) {
      this.router.navigate(['/' + this.authService.user.armyName]);
    } else {
      this.router.navigate(['/']);
    }
  }

  trooperClicked(id: string | null) {
    if (id != null) {
      if (this.route.snapshot.params['army']) {
        this.router.navigate([this.route.snapshot.params['army'] + '/' + id]);
      }
    } else {
      this.trooperAdd();
    }
  }

  trooperAdd() {
    if (
      this.authService.user &&
      (this.context == 'globalOwner' ||
        this.authService.user.armyName == this.route.snapshot.params['army'])
    ) {
      this.router.navigate([this.authService.user.armyName + '/add']);
    }
  }

  connect() {
    this.router.navigate(['/']);
  }

  disconnect() {
    this.authService.disconnect();
  }
}
