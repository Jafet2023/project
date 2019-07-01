import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagomeriaPage } from './listagomeria.page';

describe('ListagomeriaPage', () => {
  let component: ListagomeriaPage;
  let fixture: ComponentFixture<ListagomeriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagomeriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagomeriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
