import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/app/shared/constants/models/cocktail';

@Component({
    animations: [],
    selector: 'app-cocktail-text',
    styleUrls: ['./cocktail-text.component.scss'],
    templateUrl: './cocktail-text.component.html',
})
export class CocktailTextComponent {
    @Input() cocktail: Cocktail = {} as Cocktail;
    @Input() isMixologistMode: boolean = false;
}
