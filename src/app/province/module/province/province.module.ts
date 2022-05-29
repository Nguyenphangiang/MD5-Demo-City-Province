import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinceRoutingModule } from './province-routing.module';
import {ProvinceListComponent} from '../../province-list/province-list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProvinceListComponent],
  imports: [
    CommonModule,
    ProvinceRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProvinceModule { }
