import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {Routes} from './app.routes';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import {RouterModule} from '@angular/router'

import { HomepageComponent } from './homepage.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ModuleComponent} from './modules/modules.component';

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
    FormsModule,
    HttpModule,
    Routes,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [HomepageComponent]
})
export class AppModule { }
