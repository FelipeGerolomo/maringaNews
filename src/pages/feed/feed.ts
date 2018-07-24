import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { SearchNewsPage } from '../search-news/search-news';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  numNews: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToNews() {
    this.navCtrl.push(NewsPage)
  }

  goToSearch() {
    this.navCtrl.push(SearchNewsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
