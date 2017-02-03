import { Component } from '@angular/core';
//Pages
import { LobbyPage } from '../lobby/lobby';
import { ResultsPage } from '../results/results';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = LobbyPage;
  tab2Root: any = ResultsPage;
  tab3Root: any = MePage;

  constructor() {

  }
}
