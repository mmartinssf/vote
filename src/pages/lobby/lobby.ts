import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//Pages
import { SlidesPage } from '../slides/slides';

@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {
  pushPage: any;
  
  //Mock data to display different levels on LobbyPage
  mockSlides: any = [
    { level: 1, completedNumber: 4, totalNumber: 8, img: 'assets/img/lobby1.png'},
    { level: 2, completedNumber: 2, totalNumber: 8, img: 'assets/img/lobby2.png'},
    { level: 3, completedNumber: 0, totalNumber: 8, img: 'assets/img/lobby3.png'},
    { level: 4, completedNumber: 0, totalNumber: 8, img: 'assets/img/lobby4.png'}
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.pushPage = SlidesPage;
  }

  ionViewDidLoad() {
  }

}
