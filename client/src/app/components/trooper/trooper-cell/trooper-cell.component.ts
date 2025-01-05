import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trooper, TrooperDay } from '@minitroopers/prisma';
import { AuthService } from 'src/app/services/auth.service';
import { TrooperService } from 'src/app/services/trooper.service';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-trooper-cell',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  templateUrl: './trooper-cell.component.html',
  styleUrl: './trooper-cell.component.scss',
})
export class TrooperCellComponent implements AfterViewInit, OnChanges {
  @ViewChild('insert') element!: ElementRef;

  @Input() trooper: TrooperDay | Trooper | undefined = undefined;
  @Input() withSkills: boolean = false;
  @Input() selected: boolean = false;
  @Input() disabledForm: boolean = false;
  @Input() groupColor: number | undefined = undefined;

  private timeout: NodeJS.Timeout | undefined = undefined;

  public firstSkill: number | undefined = undefined;
  public secondSkill: number | undefined = undefined;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private trooperService = inject(TrooperService);

  allSkills: string[] = [];

  ngAfterViewInit(): void {
    this.buildTrooper();
    if (this.trooper) {
      const allSkills = this.trooperService.getSkills(
        this.trooper.seed,
        this.trooper.choices,
      );

      this.firstSkill = allSkills[0];
      this.secondSkill = allSkills[1];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['groupColor'] || changes['trooper']) {
      this.buildTrooper();
    }
  }

  buildTrooper() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      if (this.trooper && this.element) {
        this.trooperService.renderTrooper(
          this.element.nativeElement,
          this.trooper.seed,
          this.groupColor ?? (this.trooper as Trooper).group,
          this.trooper.name,
          this.trooper.choices,
        );
      }
    }, 400);
  }
}
