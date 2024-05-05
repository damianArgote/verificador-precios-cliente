import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'verificar-precio',
    loadComponent:() => import('./pages/consultarPage/consultarPage.component')
  },
  {
    path:'carga-archivo',
    loadComponent:() => import('./pages/loadFilePage/loadFilePage.component')
  },
  {
    path:'**',
    redirectTo:'verificar-precio',
    pathMatch:'full'

  }
];
