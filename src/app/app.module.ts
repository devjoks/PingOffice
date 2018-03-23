import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlayersPage } from '../pages/players/players';
import { PlayersService } from '../services/playersService';

import { Http, ConnectionBackend } from '@angular/http';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    PlayersPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PlayersPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // Services
    PlayersService
  ]
})
export class AppModule {}
