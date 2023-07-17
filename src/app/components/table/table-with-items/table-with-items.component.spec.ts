import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithItemsComponent } from './table-with-items.component';

describe('TableWithItemsComponent', () => {
  let component: TableWithItemsComponent;
  let fixture: ComponentFixture<TableWithItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithItemsComponent]
    });
    fixture = TestBed.createComponent(TableWithItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
