import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityListComponent} from './city/city-list/city-list.component';
import {CityCreateComponent} from './city/city-create/city-create.component';
import {ProvinceListComponent} from './province/province-list/province-list.component';


const routes: Routes = [
  {
    path: 'city',
    loadChildren: () => import('./city/module/city.module').then(module => module.CityModule)
  },
  {
    path: 'province',
    loadChildren: () => import('./province/module/province/province.module').then(module => module.ProvinceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
