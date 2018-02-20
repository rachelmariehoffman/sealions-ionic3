import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-sponsor',
	templateUrl: 'sponsor.html'
})
export class SponsorPage {

	global: any
	sponsors: any;

	constructor(public navCtrl: NavController, public http: Http) {

		let url = "https://dev-sealions.pantheonsite.io/api/";

		this.http.get(url + 'sealions-global-text').map(res => res.json()).subscribe(data => {
			this.global = data.global_text[0].sponsors;
		});

		this.http.get(url + 'sealions-sponsors').map(res => res.json()).subscribe(data => {
			this.sponsors = data.sponsors;
		});

	}
}