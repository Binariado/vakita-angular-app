import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiContentComponent } from './vaki-content.component';

describe('VakiContentComponent', () => {
  let component: VakiContentComponent;
  let fixture: ComponentFixture<VakiContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
