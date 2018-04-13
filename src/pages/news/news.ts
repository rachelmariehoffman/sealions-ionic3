import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database';

@Component({
	selector: 'page-news',
	templateUrl: 'news.html'
})
export class NewsPage {

	constructor(public modalCtrl: ModalController, public databaseProvider: DatabaseProvider) {
	}

	ionViewDidEnter() {	
		this.databaseProvider.getGlobal();
		this.databaseProvider.getPosts();
	}

	openModal(post) {
		const newsModal = this.modalCtrl.create('NewsModalPage', { data: post });
		newsModal.present();
	}
	
}