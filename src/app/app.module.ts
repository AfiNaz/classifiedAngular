import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { Advertise } from '../shared/Advertisment';
import {   Homeapplicance  } from '../shared/HomeApplicance';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     Advertise,
     Homeapplicance

   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
