import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {routes} from './app.routes';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { RouterModule } from '@angular/router';

import {AppRoutingModule} from './app.routes'

import { HomepageComponent } from './home/homepage.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ModuleComponent} from './modules/modules.component';
import {AnswerComponent} from './answer/answer.component';

import {AppComponent} from './app.component'

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    ModuleComponent,
    AnswerComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
