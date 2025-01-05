import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PartialUserExtended } from '@minitroopers/shared';
import { take } from 'rxjs';
import { ArmyNameComponent } from 'src/app/components/containers/army-name/army-name.component';
import { ContainerAdComponent } from 'src/app/components/containers/container-ad/container-ad.component';
import { ContainerHistoryComponent } from 'src/app/components/containers/container-history/container-history.component';
import { IconContainerComponent } from 'src/app/components/containers/container-icon/container-icon.component';
import { ContainerReferralComponent } from 'src/app/components/containers/container-referral/container-referral.component';
import { TodayFightComponent } from 'src/app/components/containers/today-fight/today-fight.component';
import { TroopersBlockComponent } from 'src/app/components/trooper/troopers-block/troopers-block.component';
import { ContainerComponent } from 'src/app/layouts/container/container.component';
import { AuthService } from 'src/app/services/auth.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-hq',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    IconContainerComponent,
    TroopersBlockComponent,
    TodayFightComponent,
    ContainerAdComponent,
    ContainerReferralComponent,
    ContainerHistoryComponent,
    ArmyNameComponent,
    RouterLink,
  ],
  templateUrl: './hq.component.html',
  styleUrl: './hq.component.scss',
})
export class HqComponent implements OnChanges {
  @Input() army?: string;

  public authService = inject(AuthService);
  private backendService = inject(BackendService);
  private router = inject(Router);

  user: PartialUserExtended | null = null;
  isOwner: boolean = false;

  // debug
  ad1: { image: string; link: string } = {
    image: '/assets/images/ads/mush_2.webp',
    link: 'https://google.fr',
  };
  ad2: { image: string; link: string } = {
    image: '/assets/images/ads/hordes.webp',
    link: 'https://google.fr',
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['army']) {
      this.isOwner = false;
      if (this.army != null) {
        if (this.authService.user?.armyName == this.army) {
          this.user = this.authService.user;
          this.isOwner = true;
        } else if (this.authService.isSignable()) {
          this.authService.signIn().then(() => {
            this.getCurrentArmy();
          });
        } else {
          this.getCurrentArmy();
        }
      }
    }
  }

  getCurrentArmy() {
    if (this.army != null) {
      this.backendService
        .getArmy(this.army, true)
        .pipe(take(1))
        .subscribe((army) => {
          if (army) {
            this.user = army;
            if (this.authService.user?.armyName == this.army) {
              this.isOwner = true;
            }
          } else {
            if (this.authService.user?.armyName) {
              this.router.navigate(['/' + this.authService.user?.armyName]);
            } else {
              this.router.navigate(['/']);
            }
          }
        });
    }
  }
}
