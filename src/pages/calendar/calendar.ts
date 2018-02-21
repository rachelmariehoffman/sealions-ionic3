import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-calendar',
	templateUrl: 'calendar.html'
})
export class CalendarPage {

	global: any;
	logo: any;
	games: any;

	constructor(public navCtrl: NavController, public http: Http, public modalCtrl: ModalController) {

		let url = "http://sealions.customersuccessmarketing.com/api/";

		this.http.get(url + 'sealions-global-text').map(res => res.json()).subscribe(data => {
			this.global = data.global_text[0].game_schedule;
			this.logo = data.global_text[0].sealions_logo;
		});

		this.http.get(url + 'sealions-games').map(res => res.json()).subscribe(data => {
			this.games = data.games;
		});

	}

	openModal(game) {
		let gameInstance = {
			game: game,
			logo: this.logo
		}
		const calendarModal = this.modalCtrl.create('CalendarModalPage', { data: gameInstance });
		calendarModal.present();
	}
}