import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDiscordComponent } from './confirm-discord.component';

describe('ConfirmDiscordComponent', () => {
  let component: ConfirmDiscordComponent;
  let fixture: ComponentFixture<ConfirmDiscordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDiscordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDiscordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
