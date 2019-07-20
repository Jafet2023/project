import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoPage } from './reclamo.page';

describe('ReclamoPage', () => {
  let component: ReclamoPage;
  let fixture: ComponentFixture<ReclamoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
