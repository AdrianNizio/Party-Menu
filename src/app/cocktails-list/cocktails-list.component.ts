import { Component, OnInit, inject } from '@angular/core';
import { BackendAccessService } from '../services/backend-access-service.service';
import { Cocktail } from 'src/models/cocktail';
import { fader } from '../route-animations';

@Component({
  animations: [fader],
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent implements OnInit {
  backendAccessService = inject(BackendAccessService);
  cocktails: Cocktail[] = [];
  isMixologistMode: boolean = false;

  ngOnInit() {
    this.backendAccessService.getCocktailsList().subscribe((cocktails) => {
      this.cocktails = cocktails;
    });
    this.isMixologistMode = JSON.parse(sessionStorage.getItem("isMixologistMode") || "false");
  }

  scrollToCocktail(cocktailTitle: string) {
    const cocktailCard = document.getElementById(cocktailTitle);

    if (cocktailCard) {
      cocktailCard.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
