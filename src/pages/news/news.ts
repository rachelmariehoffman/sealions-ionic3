import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-news',
	templateUrl: 'news.html'
})
export class NewsPage {

	global: any
	posts: any;

	constructor(public navCtrl: NavController, public http: Http) {

		let url = "https://dev-sealions.pantheonsite.io/api/";

		this.http.get(url + 'sealions-global-text').map(res => res.json()).subscribe(data => {
			this.global = data.global_text[0].news_posts;
		});

		this.http.get(url + 'sealions-posts').map(res => res.json()).subscribe(data => {
			this.posts = data.posts;
		});

	}
}