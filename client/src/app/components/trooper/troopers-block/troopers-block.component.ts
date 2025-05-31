import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArmyStore } from 'src/app/stores/army.store';
import { AuthStore } from 'src/app/stores/auth.store';
import { CommandButtonComponent } from '../../buttons/command-button/command-button.component';
import { TroopersGridComponent } from '../troopers-grid/troopers-grid.component';

@Component({
  selector: 'app-troopers-block',
  imports: [TroopersGridComponent, CommandButtonComponent],
  templateUrl: './troopers-block.component.html',
  styleUrl: './troopers-block.component.scss',
})
export class TroopersBlockComponent {
  @Input() allowBack: boolean = false;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  public authStore = inject(AuthStore);
  public armyStore = inject(ArmyStore);

  backClicked() {
    if (this.armyStore.currentArmyName()) {
      this.router.navigate(['/' + this.armyStore.currentArmyName()]);
    } else {
      this.router.navigate(['/']);
    }
  }

  trooperClicked(id: string | null) {
    if (id != null) {
      if (this.route.snapshot.params['army']) {
        this.router.navigate([this.armyStore.currentArmyName() + '/' + id]);
      }
    } else {
      this.trooperAdd();
    }
  }

  trooperAdd() {
    if (this.armyStore.isOwner()) {
      this.router.navigate([this.armyStore.currentArmyName() + '/add']);
    }
  }

  connect() {
    this.router.navigate(['/']);
  }

  disconnect() {
    this.authStore.logout();
  }
}
