import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagruaPage } from './listagrua.page';

describe('ListagruaPage', () => {
  let component: ListagruaPage;
  let fixture: ComponentFixture<ListagruaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagruaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagruaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
