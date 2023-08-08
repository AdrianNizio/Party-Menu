import { ChildrenOutletContexts, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { slider } from './route-animations';

@Component({
    animations: [slider],
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'cocktails';
    val: boolean;

    constructor(translate: TranslateService, private readonly contexts: ChildrenOutletContexts) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }

    ngOnInit(): void {
        // eslint-disable-next-line no-undef
        sessionStorage.setItem('isMixologistMode', 'false');
    }

    prepareRoute(): Data | undefined {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }

    toggle(): boolean {
        this.val = !this.val;
        return this.val;
    }
}
