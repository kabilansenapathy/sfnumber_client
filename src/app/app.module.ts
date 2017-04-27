import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import { SfnoData } from "../providers/sfno-data";
import { VillagePage } from "../pages/village-page/village-page";
import { TypePage } from "../pages/type-page/type-page";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VillagePage,
    TypePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VillagePage,
    TypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SfnoData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
