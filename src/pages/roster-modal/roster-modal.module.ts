import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RosterModalPage } from './roster-modal';

@NgModule({
	declarations: [
		RosterModalPage,
	],
	imports: [
		IonicPageModule.forChild(RosterModalPage),
	],
})
export class RosterModalPageModule {}
