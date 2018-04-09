import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	global: any

	constructor(public navCtrl: NavController, public http: Http, public modalCtrl: ModalController) {

		let url = "http://sealions.customersuccessmarketing.com/api/";

		this.http.get(url + 'sealions-global-text').map(res => res.json()).subscribe(data => {
			this.global = data.global_text[0].home;
		});

	}

	openModal(post) {
		const homeModal = this.modalCtrl.create('HomeModalPage');
		homeModal.present();
	}
}