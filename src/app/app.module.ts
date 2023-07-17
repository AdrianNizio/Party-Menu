import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailTextComponent } from './cocktail-card/cocktail-text/cocktail-text.component';
import { CocktailCardComponent } from './cocktail-card/cocktail-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    CocktailTextComponent,
    CocktailCardComponent,
    CocktailsListComponent,
    WelcomeScreenComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
