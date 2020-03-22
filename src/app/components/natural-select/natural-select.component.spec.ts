import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalSelectComponent } from './natural-select.component';

describe('NaturalSelectComponent', () => {
  let component: NaturalSelectComponent;
  let fixture: ComponentFixture<NaturalSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
