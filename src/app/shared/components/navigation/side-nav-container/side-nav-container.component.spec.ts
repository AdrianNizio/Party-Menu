import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavContainerComponent } from './side-nav-container.component';

describe('SideNavContainerComponent', () => {
    let component: SideNavContainerComponent;
    let fixture: ComponentFixture<SideNavContainerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SideNavContainerComponent],
        });
        fixture = TestBed.createComponent(SideNavContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
