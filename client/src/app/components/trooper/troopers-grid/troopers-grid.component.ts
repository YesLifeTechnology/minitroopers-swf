import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  input,
  Output,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Trooper } from '@minitroopers/prisma';
import { TrooperService } from 'src/app/services/trooper.service';

@Component({
  selector: 'app-troopers-grid',
  imports: [RouterModule],
  templateUrl: './troopers-grid.component.html',
  styleUrl: './troopers-grid.component.scss',
})
export class TroopersGridComponent implements AfterViewInit {
  @ViewChild('insert') element!: ElementRef;

  troopers = input.required<Trooper[]>();
  armyColor = input.required<number>();
  isOwnerArmy = input<boolean>(false);

  @Output() clickTrooper: EventEmitter<string | null> = new EventEmitter();

  public height: number = 72;
  public arrayTroopers: string[] = [];
  public arrayAdds: boolean[] = [];

  private trooperService = inject(TrooperService);

  ngAfterViewInit(): void {
    this.generateTroopers();

    if (this.isOwnerArmy()) {
      (window as any).selectTrooper = (data: any) => {
        this.selectTrooper(data);
      };
    }
  }

  selectTrooper(index: number) {
    this.clickTrooper.emit(index != null ? this.troopers()[index].id : null);
  }

  generateTroopers() {
    if (this.troopers().length > 0) {
      const col = this.isOwnerArmy() ? 3 : 4;

      this.height = 0;
      if (this.isOwnerArmy()) {
        this.height = Math.ceil((this.troopers().length + 1) / col) * 72;
      } else {
        this.height = Math.ceil(this.troopers().length / col) * 72;
      }

      this.arrayTroopers = this.troopers().map((x) => x.id);
      this.arrayAdds = this.isOwnerArmy()
        ? new Array(col - Math.ceil(this.troopers().length % col)).fill(true)
        : [];

      this.trooperService.renderArmy(
        this.element?.nativeElement,
        this.armyColor(),
        this.troopers(),
        col,
      );
    }
  }
}
