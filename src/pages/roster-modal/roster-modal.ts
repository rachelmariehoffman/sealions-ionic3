import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-roster-modal',
	templateUrl: 'roster-modal.html',
})
export class RosterModalPage {

	player: any;

	constructor(public viewCtrl: ViewController, public navParams: NavParams) {
	}

	ionViewWillLoad() {
		this.player = this.navParams.get('data');
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}

}
