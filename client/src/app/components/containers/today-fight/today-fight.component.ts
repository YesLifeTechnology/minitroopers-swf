import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ArmyStore } from 'src/app/stores/army.store';
import { FightComponent } from '../../buttons/fight/fight.component';
import { MissionsComponent } from '../../buttons/missions/missions.component';
import { RaidComponent } from '../../buttons/raid/raid.component';

@Component({
  selector: 'app-today-fight',
  imports: [CommonModule, FightComponent, MissionsComponent, RaidComponent],
  templateUrl: './today-fight.component.html',
  styleUrl: './today-fight.component.scss',
})
export class TodayFightComponent implements OnInit {
  @Input() type: 'fight' | 'mission' | 'raid' = 'fight';
  title: string = '';
  image: string = '';

  public armyStore = inject(ArmyStore);

  ngOnInit(): void {
    switch (this.type) {
      case 'fight':
        this.title = 'Bataille';
        this.image = '/assets/images/mode/garden.webp';
        break;
      case 'mission': //two mission type
        this.title = 'Mission : infiltrer';
        this.image = '/assets/images/mode/attic.webp';
        break;
      case 'raid':
        this.title = 'Raid';
        this.image = '/assets/images/mode/wood.webp';
        break;
    }
  }
}
