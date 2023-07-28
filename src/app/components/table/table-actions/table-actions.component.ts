import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { TableModes } from 'src/app/constants/enums/table-modes';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';
import { DropdownItem } from 'src/app/constants/models/dropdown-item';
import { Router } from '@angular/router';

@Component({
    selector: 'app-table-actions',
    styleUrls: ['./table-actions.component.scss'],
    templateUrl: './table-actions.component.html',
})
export class TableActionsComponent implements OnInit, OnDestroy {
    router = inject(Router);
    isScreenWiderThanMd: boolean = true;
    readonly TableModes = TableModes;
    tableMode: string = TableModes.Recipes;

    tableModesList: DropdownItem[] = [
        {
            translationKey: 'Table.TableModes.Menus',
            value: TableModes.Menus,
        },
        {
            translationKey: 'Table.TableModes.Recipes',
            value: TableModes.Recipes,
        },
    ];

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

    test(event: any) {
        console.log(event);
    }

    navigateToCreationMenu() {
        if (this.tableMode === TableModes.Recipes) {
            this.router.navigate(['add-new-recipe-menu']);
        } else {
            this.router.navigate(['add-new-menu-menu']);
        }
    }
}
