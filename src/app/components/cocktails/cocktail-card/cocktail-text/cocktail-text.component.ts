import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/models/cocktail';

@Component({
  animations: [],
  selector: 'app-cocktail-text',
  templateUrl: './cocktail-text.component.html',
  styleUrls: ['./cocktail-text.component.scss']
})
export class CocktailTextComponent {
  @Input() cocktail: Cocktail = {} as Cocktail;
  @Input() isMixologistMode: boolean = false;
}
