import { Component, OnInit, inject } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slider } from './route-animations';

@Component({
    animations: [slider],
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    contexts = inject(ChildrenOutletContexts);
    title = 'cocktails';

    ngOnInit() {
        // eslint-disable-next-line no-undef
        sessionStorage.setItem('isMixologistMode', 'false');
    }

    prepareRoute() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}
