import { BreakpointObserverService } from './breakpoint-observer.service';
import { TestBed } from '@angular/core/testing';

describe('BreakpointObserverService', () => {
    let service: BreakpointObserverService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BreakpointObserverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
