import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { BreakpointObserverService } from 'src/app/shared/services/breakpoint-observer.service';
import { Cocktail } from 'src/app/shared/constants/models/cocktail';
import { DropdownItem } from 'src/app/shared/constants/models/dropdown-item';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TableModes } from 'src/app/shared/constants/enums/table-modes';
import { MatSelectChange } from '@angular/material/select';
@Component({
    selector: 'app-table-actions',
    styleUrls: ['./table-actions.component.scss'],
    templateUrl: './table-actions.component.html',
})
export class TableActionsComponent implements OnInit, OnDestroy {
    @Input() selectedItems: Cocktail[] = [];
    @Input() drawer: MatDrawer;

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

    constructor(private readonly breakpointObserverService: BreakpointObserverService) {}

    ngOnInit(): void {
        this.breakpointObserverService.getMediumBreakpoint().subscribe((value) => {
            this.isScreenWiderThanMd = value;
        });
        console.log(this.tableMode);
    }

    ngOnDestroy(): void {
        this.breakpointObserverService.killObservable();
    }

    deleteItems(): void {
        console.log(this.selectedItems);
    }

    switchTableMode(event: MatSelectChange): void {
        console.log(event);
    }

    navigateToCreationMenu(): void {
        if (this.tableMode === TableModes.Recipes) {
            this.router.navigate(['add-new-recipe-menu']);
        } else {
            this.router.navigate(['add-new-menu-menu']);
        }
    }
}
