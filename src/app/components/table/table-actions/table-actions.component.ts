import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';

@Component({
    selector: 'app-table-actions',
    styleUrls: ['./table-actions.component.scss'],
    templateUrl: './table-actions.component.html',
})
export class TableActionsComponent implements OnInit, OnDestroy {
    isScreenWiderThanMd: boolean = true;
    @Input() drawer: MatDrawer;

    constructor(private breakpointObserverService: BreakpointObserverService) {}

    ngOnInit() {
        this.breakpointObserverService.getMediumBreakpoint().subscribe((value) => {
            this.isScreenWiderThanMd = value;
        });
    }

    ngOnDestroy() {
        this.breakpointObserverService.killObservable();
    }

    dummyAction() {}
}
