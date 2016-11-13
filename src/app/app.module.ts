import { NgModule } from '@angular/core';
import { HttpModule , Http } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { TranslateModule } from "ng2-translate/ng2-translate";
import { TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate'
import { DashboardComponent } from '../pages/dashboard/dashboard.component' ;

import { GooglebookapiService } from './googlebookapi.service';
import { BhookpouchService } from  './bhookpouch.service';
import { ConnectPage } from '../pages/connect/connect';
import { ToreadPage } from '../pages/toread/toread';
import { ReadPage } from '../pages/read/read';
import { SettingsPage } from '../pages/settings/settings';
import { CreditsPage } from '../pages/credits/credits';

import { Header } from '../components/header/header'; 


export function createTranslateLoaderFactory(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    DashboardComponent,
    ConnectPage,
    ToreadPage,
    ReadPage,
    SettingsPage,
    CreditsPage,
    Header

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    TranslateModule.forRoot({
    provide: TranslateLoader,
       useFactory: (createTranslateLoaderFactory),
       deps: [Http]
   })
  ],
  exports: [HttpModule, TranslateModule],
  providers: [GooglebookapiService , BhookpouchService
   ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardComponent,
    ConnectPage,
    ToreadPage,
    ReadPage,
    SettingsPage,
    CreditsPage,
    Header

  ]

})
export class AppModule {}
