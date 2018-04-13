import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database';

@Component({
	selector: 'page-roster',
	templateUrl: 'roster.html'
})
export class RosterPage {

	constructor(public modalCtrl: ModalController, public databaseProvider: DatabaseProvider) {
	}

	ionViewDidEnter() {
		this.databaseProvider.getGlobal();
		this.databaseProvider.getPlayers();
	}

	openModal(player) {
		const playerModal = this.modalCtrl.create('RosterModalPage', { data: player });
		playerModal.present();
	}
}