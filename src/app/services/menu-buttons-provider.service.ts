import { Injectable } from '@angular/core';
import { Button } from '../constants/models/main-menu-buttons';
import { AppRoutes } from '../constants/enums/app-routes';
import { ButtonsByUrlLookupTable } from '../constants/models/lookup-table';

@Injectable({
    providedIn: 'root',
})
export class MenuButtonsProviderService {
    buttonClasses = 'btn btn-primary';

    welcomeScreenButtons: Button[] = [
        {
            classes: this.buttonClasses,
            route: AppRoutes.TodaysMenuRoute,
            text: 'MenuButtons.TodaysMenu',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'MenuButtons.ListOfAllRecipes',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'MenuButtons.ListOfAllMenus',
        },
        {
            classes: this.buttonClasses,
            navigateData: 'newRecipeButtons',
            route: AppRoutes.NewRecipeMenuRoute,
            text: 'MenuButtons.AddNewRecipe',
        },
        {
            classes: this.buttonClasses,
            navigateData: 'newMenuButtons',
            route: AppRoutes.CreateNewMenusRoute,
            text: 'MenuButtons.AddNewMenu',
        },
        {
            classes: 'btn btn-secondary',
            navigateData: 'settingsButtons',
            route: AppRoutes.SettingsRoute,
            text: 'MenuButtons.Settings',
        },
    ];

    dishMenuButtons: Button[] = [
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'MenuButtons.Alcohol',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'MenuButtons.Food',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'MenuButtons.All',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'MenuButtons.CombinedMenus',
        },
    ];

    newRecipeButtons: Button[] = [
        {
            classes: this.buttonClasses,
            route: AppRoutes.NewItemRoute,
            text: 'MenuButtons.Alcohol',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.NewItemRoute,
            text: 'MenuButtons.Food',
        },
    ];

    settingsButtons: Button[] = [
        {
            classes: this.buttonClasses,
            route: AppRoutes.NewItemRoute,
            text: 'MenuButtons.Alcohol',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.NewItemRoute,
            text: 'MenuButtons.Food',
        },
    ];

    welcomeScreenButtons2: Button[] = [
        {
            classes: this.buttonClasses,
            navigateData: '',
            route: AppRoutes.Empty,
            text: 'MenuButtons.MainMenu',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'MenuButtons.ListOfAllMenus',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'MenuButtons.ListOfAllRecipes',
        },
        {
            classes: this.buttonClasses,
            navigateData: 'newRecipeButtons',
            route: AppRoutes.NewRecipeMenuRoute,
            text: 'MenuButtons.AddNewRecipe',
        },
        {
            classes: this.buttonClasses,
            navigateData: 'newMenuButtons',
            route: AppRoutes.CreateNewMenusRoute,
            text: 'MenuButtons.AddNewMenu',
        },
        {
            classes: 'btn btn-secondary',
            navigateData: 'settingsButtons',
            route: AppRoutes.SettingsRoute,
            text: 'MenuButtons.Settings',
        },
    ];

    buttonsByUrlLookupTable: ButtonsByUrlLookupTable = {
        'add-new-recipe-menu': this.newRecipeButtons,
        'create-new-menus-menu': this.dishMenuButtons,
        settings: this.settingsButtons,
        'view-menus-menu': this.dishMenuButtons,
    };

    getButtonsByUrl(url?: string) {
        if (url && this.buttonsByUrlLookupTable[url]) {
            return this.buttonsByUrlLookupTable[url];
        } else {
            return this.welcomeScreenButtons;
        }
    }
}
