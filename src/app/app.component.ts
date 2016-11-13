import { Component, ViewChild  } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ConnectPage } from '../pages/connect/connect';
import { ToreadPage } from '../pages/toread/toread';
import { ReadPage } from '../pages/read/read';
import { SettingsPage } from '../pages/settings/settings';
import { CreditsPage } from '../pages/credits/credits';



import { TranslatePipe, TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = DashboardComponent;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    private translate: TranslateService
  ) {
    this.initializeApp();
    translate.setDefaultLang('en');
    // this language will be used as a fallback when a translation isn't found in the current language
  

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // have to populate the page once the asynchronous update has been done
    translate.use('fr'); 
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
        console.log("event called");
        console.log(translate.instant('already_read_list'));
            // set our app's pages
          this.pages = [
            { title: translate.instant('main_page'), component: DashboardComponent },
            { title: translate.instant('connect'), component: ConnectPage },
            { title: translate.instant('to_read_list'), component: ToreadPage },
            { title: translate.instant('already_read_list'), component: ReadPage },
            { title: translate.instant('settings'), component: SettingsPage },
            { title: translate.instant('credits'), component: CreditsPage }
          ];
          });



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
