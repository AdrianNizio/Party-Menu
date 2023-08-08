import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyMenuNavbarComponent } from './party-menu-navbar.component';

describe('PartyMenuNavbarComponent', () => {
    let component: PartyMenuNavbarComponent;
    let fixture: ComponentFixture<PartyMenuNavbarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PartyMenuNavbarComponent],
        });
        fixture = TestBed.createComponent(PartyMenuNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
