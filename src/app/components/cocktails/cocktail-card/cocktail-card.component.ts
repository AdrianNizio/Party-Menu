import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/models/cocktail';

@Component({
  animations: [],
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss']
})
export class CocktailCardComponent {
  @Input() cocktail: Cocktail = {} as Cocktail;
  @Input() isMixologistMode: boolean = false;

}
