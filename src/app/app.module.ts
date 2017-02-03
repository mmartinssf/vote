import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Pages
import { LobbyPage } from '../pages/lobby/lobby';
import { MePage } from '../pages/me/me';
import { ResultsPage } from '../pages/results/results';
import { SlidesPage } from '../pages/slides/slides';
import { TabsPage } from '../pages/tabs/tabs';

const decs = [MyApp, LobbyPage, MePage, ResultsPage, SlidesPage, TabsPage]

@NgModule({
  declarations: [
    decs
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    decs
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
