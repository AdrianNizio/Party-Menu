import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailCardComponent } from './core/features/menus/cocktails/cocktail-card/cocktail-card.component';
import { CocktailTextComponent } from './core/features/menus/cocktails/cocktail-card/cocktail-text/cocktail-text.component';
import { CocktailsMenuComponent } from './core/features/menus/cocktails/cocktails-menu/cocktails-menu.component';
import { FoodCardComponent } from './core/features/menus/food/food-card/food-card.component';
import { FoodMenuComponent } from './core/features/menus/food/food-menu/food-menu.component';
import { AddIngredientsComponent } from './core/features/new-recipe/add-ingredients/add-ingredients.component';
import { AddNewRecipeFormComponent } from './core/features/new-recipe/add-new-recipe-form/add-new-recipe-form.component';
import { AddPreparationStepsComponent } from './core/features/new-recipe/add-preparation-steps/add-preparation-steps.component';
import { FileUploadComponentComponent } from './core/features/new-recipe/file-upload-component/file-upload-component.component';
import { TableActionsComponent } from './core/features/table/table-actions/table-actions.component';
import { TableFiltersComponent } from './core/features/table/table-filters/table-filters.component';
import { TableWithItemsComponent } from './core/features/table/table-with-items/table-with-items.component';
import { WelcomeScreenComponent } from './core/features/welcome-screen/welcome-screen.component';
import { SettingsComponent } from './core/settings/settings.component';
import { MaterialModule } from './modules/external-modules/material/material.module';
import { MenuButtonsContainerComponent } from './shared/components/navigation/main-menu-buttons-container/menu-buttons-container.component';
import { PartyMenuNavbarComponent } from './shared/components/navigation/party-menu-navbar/party-menu-navbar.component';
import { SideNavContainerComponent } from './shared/components/navigation/side-nav-container/side-nav-container.component';
import { TranslateDifficultyPipe } from './shared/pipes/difficulty-pipe/difficulty-pipe.pipe';
import { secondsToMinutes } from './shared/pipes/seconds-to-minutes-pipe/seconds-to-minutes-pipe.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
        FileUploadComponentComponent,
        SideNavContainerComponent,
        PartyMenuNavbarComponent,
        TranslateDifficultyPipe,
        secondsToMinutes,
        AddIngredientsComponent,
        AddPreparationStepsComponent,
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
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}, {}),
    ],
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { showError: true },
        },
    ],
})
export class AppModule {}
