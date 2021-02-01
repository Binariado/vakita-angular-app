import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiViewCardComponent } from './vaki-view-card.component';

describe('VakiViewCardComponent', () => {
  let component: VakiViewCardComponent;
  let fixture: ComponentFixture<VakiViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
