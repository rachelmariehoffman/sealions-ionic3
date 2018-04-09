import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-home-modal',
    templateUrl: 'home-modal.html',
})
export class HomeModalPage {

	constructor(public viewCtrl: ViewController, public navParams: NavParams) {
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}

	contactUs() {
		window.location.href = "mailto:doug@customersuccessmarketing.com";
	}


}