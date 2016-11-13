import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Header } from '../../components/header/header';
import { TranslatePipe, TranslateService } from 'ng2-translate/ng2-translate';

/*
  Generated class for the Connect page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
  providers:[Header]
})
export class ConnectPage {
  titlepage : String;
  constructor(public navCtrl: NavController,  public header: Header,private translate: TranslateService) {}

  ionViewDidLoad() {
    this.titlepage = this.translate.instant('login_with_facebook');
  }

}
