import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/app/shared/constants/models/cocktail';

@Component({
    animations: [],
    selector: 'app-cocktail-card',
    styleUrls: ['./cocktail-card.component.scss'],
    templateUrl: './cocktail-card.component.html',
})
export class CocktailCardComponent {
    @Input() cocktail: Cocktail = {} as Cocktail;
    @Input() isMixologistMode: boolean = false;
}
