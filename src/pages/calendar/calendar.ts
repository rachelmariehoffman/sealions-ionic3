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

		this.logo = 'assets/imgs/sealions_logo.png';

		this.http.get(url + 'sealions-global-text').map(res => res.json()).subscribe(data => {
			this.global = data.global_text[0].game_schedule;
			this.logo = data.global_text[0].sealions_logo;
		});

		this.http.get(url + 'sealions-games').map(res => res.json()).subscribe(data => {
			this.games = data.games;
		});

		this.games = [{
			date:"Jun 9, 2017",
			game_summary:"The San Diego SeaLions rained goals upon the Arizona desert this weekend, defeating FC Tucson 2-1 on Friday. ↵But not everything was easy as it seemed, as the SeaLions fell behind Tucson (1-2-1) early when a handball in the penalty box led to an eighth-minute penalty score. But the visitors slowly took control of the match and in the 82nd minute, Andrea Duke (NM Highlands) found herself alone on the right side and drilled a bullet past Tucson goalkeeper Lainey Burdett (Arizona) to tie the score. The SeaLions continued to press their attack, and it paid off when Elise Britt (UCLA) took midfielder Angelina Hix (Mira Costa)’s pass and scored to put San Diego ahead in the 89th. The SeaLions’ stout defense, which has posted two shutouts and given up only the PK goal, was more than enough to seal the win.",
			home_or_away:"Away",
			location:"Kino North Stadium, 3600 S Country Club Rd, Tucson, AZ 85713",
			opponent:"FC Tuscon Women",
			opponent_logo: {
				alt:"", 
				src: "http://sealions.customersuccessmarketing.com/sites/default/files/styles/team_logo/public/wpsl-logo--fc-tuscon-women.jpg?itok=h3lTOGIt"
			},
			opponents_score:"1",
			sealions_score:"2",
			time:"7:30 pm",
			win_or_loss:"Win",
		}];

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