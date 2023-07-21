import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CocktailCardComponent } from './components/cocktails/cocktail-card/cocktail-card.component';
import { CocktailTextComponent } from './components/cocktails/cocktail-card/cocktail-text/cocktail-text.component';
import { CocktailsMenuComponent } from './components/cocktails/cocktails-menu/cocktails-menu.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { FoodCardComponent } from './components/food/food-card/food-card.component';
import { FoodMenuComponent } from './components/food/food-menu/food-menu.component';
import { MenuButtonsContainerComponent } from './components/menu-buttons-container/menu-buttons-container.component';
import { AddNewRecipeFormComponent } from './components/new-recipe/add-new-recipe-form/add-new-recipe-form.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TableActionsComponent } from './components/table/table-actions/table-actions.component';
import { TableFiltersComponent } from './components/table/table-filters/table-filters.component';
import { TableWithItemsComponent } from './components/table/table-with-items/table-with-items.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from './external-modules/material/material.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        CocktailTextComponent,
        CocktailCardComponent,
        CocktailsMenuComponent,
        WelcomeScreenComponent,
        TableWithItemsComponent,
        TableActionsComponent,
        TableFiltersComponent,
        AddNewRecipeFormComponent,
        SettingsComponent,
        MenuButtonsContainerComponent,
        FoodCardComponent,
        FoodMenuComponent,
    ],
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                deps: [HttpClient],
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
            },
        }),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
    ],
    providers: [],
})
export class AppModule {}
