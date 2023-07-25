import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { BackendAccessService } from 'src/app/services/backend-access-service.service';
import { Cocktail } from 'src/app/constants/models/cocktail';

@Component({
    selector: 'app-table-with-items',
    styleUrls: ['./table-with-items.component.scss'],
    templateUrl: './table-with-items.component.html',
})
export class TableWithItemsComponent implements OnInit {
    cocktails: Cocktail[] = [];

    displayedColumns: string[] = ['name', 'preparationTime', 'difficulty', 'ingredients', 'type'];
    private backendAccessService = inject(BackendAccessService);

    ngOnInit() {
        this.backendAccessService.getCocktailsMenu().subscribe((cocktails) => {
            this.cocktails = cocktails;
        });
    }
}
