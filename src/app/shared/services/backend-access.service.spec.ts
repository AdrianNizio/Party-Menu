import { BackendAccessService } from './backend-access-service.service';
import { TestBed } from '@angular/core/testing';

describe('BackendAccessService', () => {
    let service: BackendAccessService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BackendAccessService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
