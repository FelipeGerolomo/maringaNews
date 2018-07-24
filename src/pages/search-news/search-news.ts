import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput } from 'ionic-angular';

/**
 * Generated class for the SearchNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-news',
  templateUrl: 'search-news.html',
})
export class SearchNewsPage {
  @ViewChild("searchBar") inputEl;;

  constructor(public navCtrl: NavController, public navParams: NavParams, public elementRef: ElementRef, private renderer: Renderer) {
    
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.inputEl.setFocus();
    }, 500);
  }


}
