import { Component, OnInit, inject } from '@angular/core';
import { BackendAccessService } from 'src/app/shared/services/backend-access-service.service';
import { Cocktail } from 'src/app/shared/constants/models/cocktail';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
    selector: 'app-table-with-items',
    styleUrls: ['./table-with-items.component.scss'],
    templateUrl: './table-with-items.component.html',
})
export class TableWithItemsComponent implements OnInit {
    cocktails: Cocktail[] = [];
    selection = new SelectionModel<Cocktail>(true, []);

    displayedColumns: string[] = ['select', 'name', 'preparationTime', 'difficulty', 'ingredients', 'type'];
    private readonly backendAccessService = inject(BackendAccessService);

    ngOnInit(): void {
        this.backendAccessService.getCocktailsMenu().subscribe((cocktails) => {
            this.cocktails = cocktails;
        });
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean {
        const numSelected = this.selection.selected.length;
        const numRows = this.cocktails.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows(): void {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }

        this.selection.select(...this.cocktails);
    }
}
