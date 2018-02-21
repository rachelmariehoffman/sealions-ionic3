import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-calendar-modal',
	templateUrl: 'calendar-modal.html',
})
export class CalendarModalPage {

	gameInstance: any;
	game: any;
	logo: any;

	constructor(public viewCtrl: ViewController, private navParams: NavParams) {
	}

	ionViewWillLoad() {
		this.gameInstance = this.navParams.get('data');
		this.game = this.gameInstance.game;
		this.logo = this.gameInstance.logo;
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}

}
