import { Component, OnInit, inject } from '@angular/core';
import { fader } from 'src/app/route-animations';
import { BackendAccessService } from 'src/app/services/backend-access-service.service';
import { Cocktail } from 'src/models/cocktail';

@Component({
  animations: [fader],
  selector: 'app-cocktails-menu',
  templateUrl: './cocktails-menu.component.html',
  styleUrls: ['./cocktails-menu.component.scss']
})
export class CocktailsMenuComponent implements OnInit {
  backendAccessService = inject(BackendAccessService);
  cocktails: Cocktail[] = [];
  isMixologistMode: boolean = false;

  ngOnInit() {
    this.backendAccessService.getCocktailsMenu().subscribe((cocktails) => {
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
