import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplepieComponent } from './simplepie.component';

describe('SimplepieComponent', () => {
  let component: SimplepieComponent;
  let fixture: ComponentFixture<SimplepieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplepieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
