import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database';

@Component({
	selector: 'page-calendar',
	templateUrl: 'calendar.html'
})
export class CalendarPage {

	constructor(public modalCtrl: ModalController, public databaseProvider: DatabaseProvider) {
	}

	ionViewDidEnter() {	
		this.databaseProvider.getGlobal();
		this.databaseProvider.getGames();
	}

	openModal(game) {
		let gameInstance = {
			game: game,
			logo: this.databaseProvider.globalSealionsLogo
		}
		const calendarModal = this.modalCtrl.create('CalendarModalPage', { data: gameInstance });
		calendarModal.present();
	}

}