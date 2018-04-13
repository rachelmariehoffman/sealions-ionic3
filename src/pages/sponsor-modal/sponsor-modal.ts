import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SponsorModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-sponsor-modal',
	templateUrl: 'sponsor-modal.html',
})
export class SponsorModalPage {

	sponsor: any

	constructor(public viewCtrl: ViewController, public navParams: NavParams) {
	}

	ionViewWillLoad() {
		this.sponsor = this.navParams.get('data');
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}

}
