import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-roster',
	templateUrl: 'roster.html'
})
export class RosterPage {

	global: any
	players: any;

	constructor(public navCtrl: NavController, public http: Http, public modalCtrl: ModalController) {

		let url = "http://sealions.customersuccessmarketing.com/api/";

		this.http.get(url + 'sealions-global-text').map(res => res.json()).subscribe(data => {
			this.global = data.global_text[0].roster;
		});

		this.http.get(url + 'sealions-roster').map(res => res.json()).subscribe(data => {
			this.players = data.players;
		});

	}

	openModal(player) {
		const playerModal = this.modalCtrl.create('RosterModalPage', { data: player });
		playerModal.present();
	}
}