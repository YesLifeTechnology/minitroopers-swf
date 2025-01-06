import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Trooper } from '@minitroopers/prisma';
import { TrooperService } from 'src/app/services/trooper.service';

@Component({
    selector: 'app-troopers-grid',
    imports: [CommonModule, RouterModule],
    templateUrl: './troopers-grid.component.html',
    styleUrl: './troopers-grid.component.scss'
})
export class TroopersGridComponent implements AfterViewInit, OnChanges {
  @ViewChild('insert') element!: ElementRef;

  @Input() troopers: Trooper[] = [];
  @Input() armyColor: number | undefined = undefined;
  @Input() isOwnerArmy: boolean = true;
  @Output() clickTrooper: EventEmitter<string | null> = new EventEmitter();

  public height: number = 71;
  public arrayTroopers: string[] = [];
  public arrayAdds: boolean[] = [];

  private trooperService = inject(TrooperService);

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit(): void {
    this.generateTroopers();

    if (this.isOwnerArmy) {
      (window as any).selectTrooper = (data: any) => {
        this.selectTrooper(data);
      };
    }
  }

  selectTrooper(index: number) {
    this.clickTrooper.emit(index != null ? this.troopers[index].id : null);
  }

  generateTroopers() {
    if (this.troopers.length > 0) {
      const col = this.isOwnerArmy ? 3 : 4;

      this.height = 0;
      if (this.isOwnerArmy) {
        this.height = Math.ceil((this.troopers.length + 1) / col) * 72;
      } else {
        this.height = Math.ceil(this.troopers.length / col) * 72;
      }

      this.arrayTroopers = this.troopers.map((x) => x.id);
      this.arrayAdds = this.isOwnerArmy
        ? new Array(col - Math.ceil(this.troopers.length % col)).fill(true)
        : [];

      this.trooperService.renderArmy(
        this.element?.nativeElement,
        this.armyColor as number,
        this.troopers,
        col,
      );
    }
  }
}
