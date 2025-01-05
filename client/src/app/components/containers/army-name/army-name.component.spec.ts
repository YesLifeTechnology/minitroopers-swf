import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyNameComponent } from './army-name.component';

describe('ArmyNameComponent', () => {
  let component: ArmyNameComponent;
  let fixture: ComponentFixture<ArmyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmyNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
