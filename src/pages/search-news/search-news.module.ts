import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchNewsPage } from './search-news';

@NgModule({
  declarations: [
    SearchNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchNewsPage),
  ],
})
export class SearchNewsPageModule {}
