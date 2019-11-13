import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import * as  $ from 'jquery';

const defaultLanguage = "en";
const additionalLanguages = ["fr", "en"];
const languages: string[] =
  [defaultLanguage].concat(additionalLanguages);

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})


export class NavbarComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.addLangs(additionalLanguages);

    let initLang = this.translate.getBrowserLang();
    if (languages.indexOf(initLang) === -1) {
      initLang = defaultLanguage;
    }
    this.translate.use(initLang);
  }



  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    var y = window.scrollY;
    if (y >= 600) {
      $("#logo_min").css("display", "block")
    }
    else {
      $("#logo_min").css("display", "none")
    }
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }

  ngOnInit() { }
}