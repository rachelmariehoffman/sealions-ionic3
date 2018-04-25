import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
Generated class for the DatabaseProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

	globalHome: any;
	globalAbout: any;
	globalPosts: any;
	globalGames: any;
	globalPlayers: any;
	globalSponsors:any;
	globalSealionsLogo: any;
	globalWpslLogo: any;
	logo: any;
	posts: any;
	games: any;
	players: any;
	sponsors: any;
	url = "http://sealions.customersuccessmarketing.com/api/";

	constructor(public http: Http) {
		console.log('Hello DatabaseProvider Provider');
	}

	public getGlobal() {
		this.http.get(this.url + 'sealions-global-text').map(res => res.json()).subscribe(data => {
			this.globalHome = data.global_text[0].home;
			this.globalAbout = data.global_text[0].about;
			this.globalPosts = data.global_text[0].news_posts;
			this.globalGames = data.global_text[0].game_schedule;
			this.globalPlayers = data.global_text[0].roster;
			this.globalSponsors = data.global_text[0].sponsors;
			this.globalSealionsLogo = data.global_text[0].sealions_logo;
			this.globalWpslLogo = data.global_text[0].wpsl_logo;
		});
	}

	public getPosts() {
		this.http.get(this.url + 'sealions-posts').map(res => res.json()).subscribe(data => {
			this.posts = data.posts;
		});
	}

	public getGames() {
		this.http.get(this.url + 'sealions-games').map(res => res.json()).subscribe(data => {
			this.games = data.games;
		});
	}

	public getPlayers() {
		this.http.get(this.url + 'sealions-roster').map(res => res.json()).subscribe(data => {
			this.players = data.players;
		});
	}

	public getSponsors() {
		this.http.get(this.url + 'sealions-sponsors').map(res => res.json()).subscribe(data => {
			this.sponsors = data.sponsors;
		});
	}

}
