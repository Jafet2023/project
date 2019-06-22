import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'lista', loadChildren: './pages/lista/lista.module#ListaPageModule' },
  { path: 'informacion', loadChildren: './pages/informacion/informacion.module#InformacionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
