import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fight } from '@minitroopers/prisma';
import { PartialUserExtended } from '@minitroopers/shared';
import { take } from 'rxjs';
import { GetArmyNamePipe } from 'src/app/pipes/getArmyName.pipe';
import { FightService } from 'src/app/services/fight.service';
import { ArmyStore } from 'src/app/stores/army.store';

@Component({
  selector: 'app-view-fight',
  imports: [GetArmyNamePipe],
  templateUrl: './view-fight.component.html',
  styleUrl: './view-fight.component.scss',
})
export class ViewFightComponent implements AfterViewInit {
  @ViewChild('insert') element!: ElementRef;

  fight: Fight | undefined = undefined;
  loadingFight: boolean = false;
  fightType: 'war' | 'mission' | 'raid' = 'war';
  savedSwfData: string | null = null;
  raidLevel: string = '';

  userArmy: PartialUserExtended | undefined = undefined;
  userOpponent: PartialUserExtended | undefined = undefined;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private armyStore = inject(ArmyStore);
  private fightService = inject(FightService);

  constructor() {
    this.loadingFight = true;
    const state = this.router.currentNavigation()?.extras.state;

    if (state && state['swfData']) {
      this.fightType = 'raid';
      this.raidLevel = state['raidLevel'];
      this.savedSwfData = state['swfData'];
    } else {
      const fightId = this.route.snapshot.params['warId'];
      if (fightId != null) {
        if (this.route.routeConfig?.path === 'war/:warId') {
          this.fightType = 'war';
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
        } else if (this.route.routeConfig?.path === 'mission/:warId') {
          this.fightType = 'mission';
          this.fightService
            .getMissionDetails(fightId)
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
    }
  }

  ngAfterViewInit(): void {
    if (this.element && this.savedSwfData) {
      this.fightService.renderFight(
        this.element.nativeElement,
        this.savedSwfData,
      );
    }
  }

  onReturn(event: MouseEvent) {
    event.stopPropagation();

    if (this.armyStore.army()) {
      this.router.navigate(['/' + this.armyStore.army()!.armyName]);
    } else {
      this.router.navigate(['/']);
    }
  }

  generateFight(data: string) {}
}
