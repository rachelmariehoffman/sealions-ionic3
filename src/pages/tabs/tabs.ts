import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';
import { CalendarPage } from '../calendar/calendar';
import { RosterPage } from '../roster/roster';
import { SponsorPage } from '../sponsor/sponsor';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = NewsPage;
	tab3Root = CalendarPage;
	tab4Root = RosterPage;
	tab5Root = SponsorPage

	constructor() {

	}
}
