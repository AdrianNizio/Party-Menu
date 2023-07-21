import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slider } from './route-animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
    animations: [slider],
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'Party Menu';

    constructor(translate: TranslateService, private contexts: ChildrenOutletContexts) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }

    ngOnInit() {
        // eslint-disable-next-line no-undef
        sessionStorage.setItem('isMixologistMode', 'false');
    }

    prepareRoute() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}
