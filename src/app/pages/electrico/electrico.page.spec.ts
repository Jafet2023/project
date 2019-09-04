import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricoPage } from './electrico.page';

describe('ElectricoPage', () => {
  let component: ElectricoPage;
  let fixture: ComponentFixture<ElectricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
