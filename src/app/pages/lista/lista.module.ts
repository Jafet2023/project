import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaPage } from './lista.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
