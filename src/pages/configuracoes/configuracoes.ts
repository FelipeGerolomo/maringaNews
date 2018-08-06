import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications) {

  }

  showNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Maringá News',
      text: 'O PDT definiu o nome de Ciro Gomes como candidato à Presidência',
      icon: 'res://icon'
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

}
