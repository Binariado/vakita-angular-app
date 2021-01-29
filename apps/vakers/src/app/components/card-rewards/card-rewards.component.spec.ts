import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRewardsComponent } from './card-rewards.component';

describe('CardRewardsComponent', () => {
  let component: CardRewardsComponent;
  let fixture: ComponentFixture<CardRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
