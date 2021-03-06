import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { CalendarPage } from '../pages/calendar/calendar';
import { RosterPage } from '../pages/roster/roster';
import { SponsorPage } from '../pages/sponsor/sponsor';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { DatabaseProvider } from '../providers/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    CalendarPage,
    RosterPage,
    SponsorPage,
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
    HomePage,
    NewsPage,
    CalendarPage,
    RosterPage,
    SponsorPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
