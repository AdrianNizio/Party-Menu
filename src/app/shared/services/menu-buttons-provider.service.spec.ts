import { MenuButtonsProviderService } from './menu-buttons-provider.service';
import { TestBed } from '@angular/core/testing';

describe('MenuButtonsProviderService', () => {
    let service: MenuButtonsProviderService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MenuButtonsProviderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
