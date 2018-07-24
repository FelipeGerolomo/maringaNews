import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  isNight: boolean;
  nightTheme: String;
  fontSize: boolean;
  isMarker: boolean;
  heart: String;
  isMoon: string;

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private socialSharing: SocialSharing
    ) {
    this.nightTheme = 'bg-night';
    this.isNight = false;
    this.fontSize = false;
    this.isMarker = false;
    this.heart = 'heart-outline';
    this.isMoon = 'moon';
  }

  share() {
    let msg = 'hello world';
    let link = 'https://g1.globo.com/rj/rio-de-janeiro/noticia/2018/07/24/sergio-cabral-e-colocado-em-isolamento-em-bangu-8.ghtml'
    this.socialSharing.share(msg, null, null, link)
  }

  isNightTheme() {
    if (!this.isNight) {
      this.isNight = true;
      this.isMoon = 'sunny';
    } else {
      this.isNight = false;
      this.isMoon = 'moon';
    }
  }

  isFontSize() {
    if (!this.fontSize) {
      this.fontSize = true;
    } else {
      this.fontSize = false;
    }
  }

  markerNews() {
    if (!this.isMarker) {
      this.isMarker = true;
      this.heart = 'heart';
      const toast = this.toastCtrl.create({
        message: 'Notícia adicionada nos favoritos',
        duration: 2000
      });
      toast.present();
    } else {
      this.isMarker = false;
      this.heart = 'heart-outline';
      const toast = this.toastCtrl.create({
        message: 'Notícia removida dos favoritos',
        duration: 2000
      });
      toast.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
