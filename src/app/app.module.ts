import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './city/city-list/city-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CityCreateComponent } from './city/city-create/city-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProvinceListComponent } from './province/province-list/province-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ShareModule} from './nav-bar/module/share/share.module';
import { CityEditComponent } from './city/city-edit/city-edit.component';
import { CityDeleteComponent } from './city/city-delete/city-delete.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
