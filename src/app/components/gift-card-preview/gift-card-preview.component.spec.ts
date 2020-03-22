import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardPreviewComponent } from './gift-card-preview.component';

describe('GiftCardPreviewComponent', () => {
  let component: GiftCardPreviewComponent;
  let fixture: ComponentFixture<GiftCardPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCardPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
