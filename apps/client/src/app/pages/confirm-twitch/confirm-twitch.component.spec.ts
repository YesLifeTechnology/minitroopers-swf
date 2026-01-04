import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTwitchComponent } from './confirm-twitch.component';

describe('ConfirmTwitchComponent', () => {
  let component: ConfirmTwitchComponent;
  let fixture: ComponentFixture<ConfirmTwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmTwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmTwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
