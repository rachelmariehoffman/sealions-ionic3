import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database';

@Component({
	selector: 'page-sponsor',
	templateUrl: 'sponsor.html'
})
export class SponsorPage {

	constructor(public modalCtrl: ModalController, public databaseProvider: DatabaseProvider) {
	}

	ionViewDidEnter() {
		this.databaseProvider.getGlobal();
		this.databaseProvider.getSponsors();
	}

	openModal(sponsor) {
		const sponsorModal = this.modalCtrl.create('SponsorModalPage', { data: sponsor });
		sponsorModal.present();
	}
}