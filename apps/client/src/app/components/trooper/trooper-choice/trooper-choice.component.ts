import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Trooper } from '@minitroopers/prisma';
import { Skills, TrooperSkill } from '@minitroopers/shared';
import { take } from 'rxjs';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { TrooperService } from 'src/app/services/trooper.service';
import { TrooperCellComponent } from '../trooper-cell/trooper-cell.component';

@Component({
  selector: 'app-trooper-choice',
  imports: [TrooperCellComponent, CommonModule, TooltipDirective],
  templateUrl: './trooper-choice.component.html',
  styleUrl: './trooper-choice.component.scss',
})
export class TrooperChoiceComponent implements OnInit {
  @Input() selectedTrooper!: Trooper;
  @Output() returnChoice: EventEmitter<boolean> = new EventEmitter();
  @Output() updatedTrooper: EventEmitter<Trooper> = new EventEmitter();

  public has3Choices: boolean = false;
  public skills: number[] = [];
  public allSkills = Skills;
  private trooperSkill: TrooperSkill | undefined = undefined;

  private trooperService = inject(TrooperService);

  lock: boolean = false;

  ngOnInit(): void {
    this.trooperSkill = new TrooperSkill(
      this.selectedTrooper.seed,
      this.selectedTrooper.choices,
    );
    this.skills = this.trooperSkill.generateSkillChoices();
    this.has3Choices = this.skills.includes(64);
  }

  chooseSkill(index: number) {
    if (!this.lock && this.selectedTrooper) {
      this.lock = true;
      this.trooperService
        .chooseSkill(this.selectedTrooper.id, index)
        .pipe(take(1))
        .subscribe((response) => {
          if (response.troopers?.length) {
            const trooperUpdated = response.troopers.find(
              (x) => x.id == this.selectedTrooper.id,
            );
            if (trooperUpdated) {
              this.updatedTrooper.emit(trooperUpdated);
              this.returnChoice.emit(true);
            }
          }
        });
    }
  }
}
