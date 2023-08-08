import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Cocktail } from 'src/app/shared/constants/models/cocktail';
import { BackendAccessService } from 'src/app/shared/services/backend-access-service.service';

@Component({
    selector: 'app-table-with-items',
    styleUrls: ['./table-with-items.component.scss'],
    templateUrl: './table-with-items.component.html',
})
export class TableWithItemsComponent implements OnInit {
    cocktails: Cocktail[] = [];
    selection = new SelectionModel<Cocktail>(true, []);

    displayedColumns: string[] = ['select', 'name', 'preparationTime', 'difficulty', 'ingredients', 'type'];
    private backendAccessService = inject(BackendAccessService);

    ngOnInit() {
        this.backendAccessService.getCocktailsMenu().subscribe((cocktails) => {
            this.cocktails = cocktails;
        });
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.cocktails.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }

        this.selection.select(...this.cocktails);
    }
}
