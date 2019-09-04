import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'lista', loadChildren: './pages/lista/lista.module#ListaPageModule' },
  { path: 'lista/:id', loadChildren: './pages/informacion/informacion.module#InformacionPageModule' },
  { path: 'listagomeria', loadChildren: './pages/listagomeria/listagomeria.module#ListagomeriaPageModule' },
  { path: 'listagrua', loadChildren: './pages/listagrua/listagrua.module#ListagruaPageModule' },
  { path: 'reclamo', loadChildren: './pages/reclamo/reclamo.module#ReclamoPageModule' },  { path: 'calificacion', loadChildren: './pages/calificacion/calificacion.module#CalificacionPageModule' },
  { path: 'listacerrajeria', loadChildren: './pages/listacerrajeria/listacerrajeria.module#ListacerrajeriaPageModule' },
  { path: 'electrico', loadChildren: './pages/electrico/electrico.module#ElectricoPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
