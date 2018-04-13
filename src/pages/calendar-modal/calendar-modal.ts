import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { LaunchNavigator } from '@ionic-native/launch-navigator';


@IonicPage()
@Component({
	selector: 'page-calendar-modal',
	templateUrl: 'calendar-modal.html',
})
export class CalendarModalPage {

	gameInstance: any;
	game: any;
	logo: any;
	title: any;
	gameStart: any;
	gameEnd;
	startDate: any;
	endDate: any;

	constructor(public viewCtrl: ViewController, private navParams: NavParams, private calendar: Calendar, private launchNavigator: LaunchNavigator) {
	}

	ionViewWillLoad() {
		this.gameInstance = this.navParams.get('data');
		this.game = this.gameInstance.game;
		this.logo = this.gameInstance.logo;
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}

	addToCalendar() {
		this.title = 'Sealions Game vs. ' + this.game.opponent;
		this.gameStart = this.game.date + ' ' + this.game.time;
		this.startDate = new Date(this.gameStart);
		this.gameEnd = new Date(this.gameStart);
		this.gameEnd.setHours(this.gameEnd.getHours()+2);		
		this.endDate = new Date(this.gameEnd);
		this.calendar.createEventInteractively(this.title, this.game.location, null, this.startDate, this.endDate);
	}

	openInMaps() {
		this.launchNavigator.navigate(this.game.location).then(
			success => console.log('Launched navigator'),
			error => console.log('Error launching navigator', error)
		);
	}

}
