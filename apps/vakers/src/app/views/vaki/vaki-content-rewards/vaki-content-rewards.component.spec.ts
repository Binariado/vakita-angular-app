import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiContentRewardsComponent } from './vaki-content-rewards.component';

describe('VakiContentRewardsComponent', () => {
  let component: VakiContentRewardsComponent;
  let fixture: ComponentFixture<VakiContentRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiContentRewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiContentRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
