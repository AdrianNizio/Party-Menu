import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, takeUntil, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BreakpointObserverService {
    breakpointObserver = inject(BreakpointObserver);
    destroyed = new Subject<void>();

    getMediumBreakpoint(): Observable<boolean> {
        const mediumScreenWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-md');
        const mediumScreenQuery = `(min-width: ${mediumScreenWidth})`;
        return this.breakpointObserver.observe([mediumScreenQuery]).pipe(
            takeUntil(this.destroyed),
            map((value) => value.matches)
        );
    }

    killObservable() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
