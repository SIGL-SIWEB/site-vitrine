import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes} from './app.routes';

import { HomepageComponent } from './homepage.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ModuleComponent} from './modules/modules.component';

@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routes
  ],
  providers: [],
  bootstrap: [HomepageComponent]
})
export class AppModule { }
