import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrantMapComponent } from './quadrant-map.component';

describe('QuadrantMapComponent', () => {
  let component: QuadrantMapComponent;
  let fixture: ComponentFixture<QuadrantMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadrantMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrantMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
