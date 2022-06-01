import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProvinceListComponent} from '../../province-list/province-list.component';
import {ProvinceAddComponent} from '../../province-add/province-add.component';


const routes: Routes = [
  {
    path: '',
    component: ProvinceListComponent
  },
  {
    path: 'add',
    component: ProvinceAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinceRoutingModule { }
