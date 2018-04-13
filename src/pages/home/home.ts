import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public modalCtrl: ModalController, public databaseProvider: DatabaseProvider) {
	}

	ionViewWillEnter() {
		this.databaseProvider.getGlobal();
	}

	openModal(post) {
		const homeModal = this.modalCtrl.create('HomeModalPage');
		homeModal.present();
	}
}