import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {Routes} from './app.routes';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import {RouterModule} from '@angular/router'

import { HomepageComponent } from './homepage.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ModuleComponent} from './modules/modules.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule,
    Routes,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [HomepageComponent]
})
export class AppModule { }
