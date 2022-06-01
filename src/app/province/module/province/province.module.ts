import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinceRoutingModule } from './province-routing.module';
import {ProvinceListComponent} from '../../province-list/province-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProvinceAddComponent} from '../../province-add/province-add.component';


@NgModule({
  declarations: [ProvinceListComponent,
    ProvinceAddComponent,
  ],
  imports: [
    CommonModule,
    ProvinceRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProvinceModule { }
