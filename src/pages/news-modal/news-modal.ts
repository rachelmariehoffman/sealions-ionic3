import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-news-modal',
	templateUrl: 'news-modal.html',
})
export class NewsModalPage {

	post: any

	constructor(public viewCtrl: ViewController, public navParams: NavParams) {
	}

	ionViewWillLoad() {
		this.post = this.navParams.get('data');
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}

}