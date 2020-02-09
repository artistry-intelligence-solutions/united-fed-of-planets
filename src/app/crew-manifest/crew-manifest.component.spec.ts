import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewManifestComponent } from './crew-manifest.component';

describe('CrewManifestComponent', () => {
  let component: CrewManifestComponent;
  let fixture: ComponentFixture<CrewManifestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewManifestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
