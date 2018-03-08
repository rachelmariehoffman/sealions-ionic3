import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SponsorModalPage } from './sponsor-modal';

@NgModule({
	declarations: [
		SponsorModalPage,
	],
	imports: [
		IonicPageModule.forChild(SponsorModalPage),
	],
})
export class SponsorModalPageModule {}

