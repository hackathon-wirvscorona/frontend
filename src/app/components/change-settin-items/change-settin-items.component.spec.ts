import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSettinItemsComponent } from './change-settin-items.component';

describe('ChangeSettinItemsComponent', () => {
  let component: ChangeSettinItemsComponent;
  let fixture: ComponentFixture<ChangeSettinItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSettinItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSettinItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
