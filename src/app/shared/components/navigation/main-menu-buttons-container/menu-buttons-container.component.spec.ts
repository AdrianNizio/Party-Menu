import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtonsContainerComponent } from './menu-buttons-container.component';

describe('MenuButtonsContainerComponent', () => {
    let component: MenuButtonsContainerComponent;
    let fixture: ComponentFixture<MenuButtonsContainerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MenuButtonsContainerComponent],
        });
        fixture = TestBed.createComponent(MenuButtonsContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
