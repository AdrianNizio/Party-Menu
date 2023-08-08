import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-table-filters',
    styleUrls: ['./table-filters.component.scss'],
    templateUrl: './table-filters.component.html',
})
export class TableFiltersComponent {
    toppings = new FormControl('');

    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    expandersWithValues = [
        {
            checkboxes: ['1', '2', '3', '4', '5'],
            title: 'Vegs',
        },
        {
            checkboxes: ['10', '12', '13', '14', '15'],
            title: 'herbs',
        },
        {
            checkboxes: ['20', '22', '23', '24', '25'],
            title: 'fruits',
        },
        {
            checkboxes: ['30', '32', '33', '34', '35'],
            title: 'protein',
        },
        {
            checkboxes: ['40', '42', '43', '44', '45'],
            title: 'syrups',
        },
        {
            checkboxes: ['50', '52', '53', '54', '55'],
            title: 'alcohol',
        },
    ];
}
