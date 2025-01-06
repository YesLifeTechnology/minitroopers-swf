import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Trooper } from '@minitroopers/prisma';
import { getUpgradeCost, TrooperSkill } from '@minitroopers/shared';
import { take } from 'rxjs';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TrooperService } from 'src/app/services/trooper.service';
import { CommandButtonComponent } from '../../buttons/command-button/command-button.component';
import { TrooperCellComponent } from '../trooper-cell/trooper-cell.component';

const TROOPER_STATS_SKILL_ORDER = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 56, 57, 59,
  63, 65, 82, 86, 89, 91, 116, 122, 136, 45, 48, 51, 52, 64, 67, 71, 73, 93, 94,
  101, 108, 115, 132, 43, 44, 53, 54, 62, 66, 79, 96, 97, 99, 102, 104, 105,
  106, 112, 114, 117, 119, 124, 126, 127, 129, 130, 131, 137, 138, 46, 50, 69,
  78, 107, 109, 110, 111, 113, 125, 134, 139, 58, 60, 68, 83, 84, 87, 88, 133,
  47, 49, 55, 61, 70, 72, 74, 75, 76, 77, 80, 81, 85, 92, 95, 98, 100, 103, 118,
  120, 121, 123, 128, 135, 38, 39, 40, 41, 42, 90,
];

@Component({
    selector: 'app-trooper-skills',
    imports: [
        CommonModule,
        TrooperCellComponent,
        CommandButtonComponent,
        ReactiveFormsModule,
        TooltipDirective,
    ],
    templateUrl: './trooper-skills.component.html',
    styleUrl: './trooper-skills.component.scss'
})
export class TrooperSkillsComponent implements OnChanges {
  @Input() selectedTrooper!: Trooper;
  @Input() isEditable: boolean = false;
  @Output() switchButton: EventEmitter<boolean> = new EventEmitter();
  @Output() updatedTrooper: EventEmitter<Trooper> = new EventEmitter();

  public displayedSkills = TROOPER_STATS_SKILL_ORDER;

  public unlockedSkills: { [id: number]: boolean } = {};

  public updateForm: FormGroup = new FormGroup({
    CWeapon: new FormControl(null),
    CBody: new FormControl(null),
    targetSystem: new FormControl(0, Validators.required),
    moveSystem: new FormControl(1, Validators.required),
    name: new FormControl('', { validators: Validators.required }), //check allowed
  });

  public updateAttributes: {
    value: string;
    label: string;
    options: { name: string; value: number }[];
  }[] = [
    {
      value: 'CWeapon',
      label: 'Prefered Weapon',
      options: [{ name: '0', value: 0 }],
    },
    {
      value: 'CBody',
      label: 'Prefered Aim',
      options: [
        { name: 'HEAD', value: 0 },
        { name: 'TORSO_LEFT', value: 0 },
        { name: 'TORSO_RIGHT', value: 0 },
        { name: 'STOMACH', value: 0 },
        { name: 'ARM_LEFT', value: 0 },
        { name: 'ARM_RIGHT', value: 0 },
        { name: 'LEG_LEFT', value: 0 },
        { name: 'LEG_RIGHT', value: 0 },
      ],
    },
    {
      value: 'targetSystem',
      label: 'Prefered Target',
      options: [
        { name: 'CLOSEST', value: 0 },
        { name: 'EASIEST', value: 1 },
        { name: 'WEAKEST', value: 2 },
        { name: 'STRONGEST', value: 3 },
      ],
    },
    {
      value: 'moveSystem',
      label: 'Prefered Behavior',
      options: [
        { name: 'HUNTER', value: 0 },
        { name: 'STANDARD', value: 1 },
        { name: 'DEFENDER', value: 2 },
      ],
    },
  ];

  public upgradeCost: number = 0;
  public lock: boolean = false;

  public authService = inject(AuthService);
  private trooperService = inject(TrooperService);
  private notificationService = inject(NotificationService);
  private route = inject(ActivatedRoute);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTrooper']?.currentValue != null) {
      this.unlockedSkills = {};

      for (const skill of new TrooperSkill(
        this.selectedTrooper.seed,
        this.selectedTrooper.choices,
      ).getSkills()) {
        this.unlockedSkills[skill] = true;
      }
      this.upgradeCost = getUpgradeCost(
        this.selectedTrooper.choices.length + 1,
      );
      this.updateForm.reset();
      this.buildForm();
    }
    if (changes['isEditable']?.currentValue != null) {
      if (this.isEditable) {
        this.updateForm.enable();
      } else {
        this.updateForm.disable();
      }
    }
  }

  buildForm() {
    this.updateForm.get('name')?.setValue(this.selectedTrooper.name);

    for (const elementUpdate of this.updateAttributes) {
      this.updateForm
        .get(elementUpdate.value)
        ?.setValue(this.selectedTrooper[elementUpdate.value as keyof Trooper]);
    }
  }

  payUpgrade() {
    if (
      this.authService.user &&
      this.authService.user.gold >= this.upgradeCost &&
      !this.lock
    ) {
      this.switchButton.emit(true);

      // this.trooperService
      //   .upgradeTrooper(this.selectedTrooper.id)
      //   .pipe(take(1))
      //   .subscribe((response) => {
      //     if (response.troopers?.length) {
      //       const trooperUpdated = response.troopers.find(
      //         (x) => x.id == this.selectedTrooper.id,
      //       );
      //       if (trooperUpdated) {
      //         this.updatedTrooper.emit(trooperUpdated);
      //         this.switchButton.emit(true);
      //       }
      //     }
      //   });
    }
  }

  share() {
    const url =
      'https://minitroopers.com/' +
      this.route.snapshot.params['army'] +
      '/' +
      this.selectedTrooper.id;
    navigator.clipboard.writeText(url);
    this.notificationService.notify(
      'success',
      'Lien copié dans le presse papier',
    );
  }

  submitForm() {
    if (!this.lock && this.updateForm.valid) {
      this.lock = true;
      this.updateForm.disable();

      const values = this.updateForm.getRawValue();
      for (const updateAttribute of this.updateAttributes) {
        if (
          values[updateAttribute.value] != null &&
          typeof values[updateAttribute.value] != 'number'
        ) {
          values[updateAttribute.value] = parseInt(
            values[updateAttribute.value],
          );
        }
      }

      this.trooperService
        .updateConfigTrooper(this.selectedTrooper.id, values)
        .pipe(take(1))
        .subscribe((response) => {
          if (response) {
            this.lock = false;
            this.updateForm.enable();
            this.notificationService.notify('success', 'Saved');
          }
        });
    }
  }
}
