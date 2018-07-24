import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { LocalNotifications } from "@ionic-native/local-notifications";


import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPage } from '../pages/feed/feed';
import { NewsPage } from '../pages/news/news';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { SearchNewsPage } from '../pages/search-news/search-news';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    NewsPage,
    ConfiguracoesPage,
    SearchNewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    NewsPage,
    SearchNewsPage,
    ConfiguracoesPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
