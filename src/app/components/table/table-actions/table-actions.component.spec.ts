import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActionsComponent } from './table-actions.component';

describe('TableActionsComponent', () => {
    let component: TableActionsComponent;
    let fixture: ComponentFixture<TableActionsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TableActionsComponent],
        });
        fixture = TestBed.createComponent(TableActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
