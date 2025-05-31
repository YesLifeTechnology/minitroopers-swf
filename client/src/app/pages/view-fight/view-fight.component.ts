import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fight } from '@minitroopers/prisma';
import { PartialUserExtended } from '@minitroopers/shared';
import { take } from 'rxjs';
import { GetArmyNamePipe } from 'src/app/pipes/getArmyName.pipe';
import { FightService } from 'src/app/services/fight.service';
import { AuthStore } from 'src/app/stores/auth.store';

@Component({
  selector: 'app-view-fight',
  imports: [GetArmyNamePipe],
  templateUrl: './view-fight.component.html',
  styleUrl: './view-fight.component.scss',
})
export class ViewFightComponent {
  @ViewChild('insert') element!: ElementRef;

  fight: Fight | undefined = undefined;
  loadingFight: boolean = false;

  userArmy: PartialUserExtended | undefined = undefined;
  userOpponent: PartialUserExtended | undefined = undefined;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authStore = inject(AuthStore);
  private fightService = inject(FightService);

  constructor() {
    this.loadingFight = true;
    const fightId = this.route.snapshot.params['warId'];
    if (fightId != null) {
      this.fightService
        .getFightDetails(fightId)
        .pipe(take(1))
        .subscribe((response) => {
          this.userArmy = response.left as PartialUserExtended;
          this.userOpponent = response.right as PartialUserExtended;

          if (this.element) {
            this.fightService.renderFight(
              this.element.nativeElement,
              response.data,
            );
          }

          this.loadingFight = false;
        });
    }
  }

  onReturn(event: MouseEvent) {
    event.stopPropagation();

    if (this.authStore.user()) {
      this.router.navigate(['/' + this.authStore.user()!.armyName]);
    } else {
      this.router.navigate(['/']);
    }
  }

  generateFight(data: string) {}
}
