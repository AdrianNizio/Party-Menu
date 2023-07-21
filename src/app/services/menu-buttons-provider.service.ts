import { Injectable } from '@angular/core';
import { Button } from '../models/main-menu-buttons';
import { ButtonsByUrlLookupTable } from 'src/models/lookup-table';
import { AppRoutes } from '../enums/app-routes';

@Injectable({
    providedIn: 'root',
})
export class MenuButtonsProviderService {
    buttonClasses = 'btn btn-primary';

    welcomeScreenButtons: Button[] = [
        {
            classes: this.buttonClasses,
            navigateData: 'dishMenuButtons',
            route: AppRoutes.MenusMenuRoute,
            text: 'MenuButtons.Menus',
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
            classes: 'btn btn-secondary',
            navigateData: 'settingsButtons',
            route: AppRoutes.SettingsRoute,
            text: 'MenuButtons.Settings',
        },
    ];

    dishMenuButtons: Button[] = [
        {
            classes: this.buttonClasses,
            navigateData: 'dishMenuButtons2',
            route: AppRoutes.ViewMenusMenuRoute,
            text: 'MenuButtons.ViewMenus',
        },
        {
            classes: this.buttonClasses,
            navigateData: 'dishMenuButtons2',
            route: AppRoutes.CreateNewMenusMenuRoute,
            text: 'MenuButtons.CreateNewMenu',
        },
    ];

    dishMenuButtons2: Button[] = [
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

    buttonsByUrlLookupTable: ButtonsByUrlLookupTable = {
        'add-new-recipe-menu': this.newRecipeButtons,
        'create-new-menus-menu': this.dishMenuButtons2,
        'menus-menu': this.dishMenuButtons,
        settings: this.settingsButtons,
        'view-menus-menu': this.dishMenuButtons2,
    };

    getButtonsByUrl(url: string) {
        if (url) {
            return this.buttonsByUrlLookupTable[url];
        } else {
            return this.welcomeScreenButtons;
        }
    }
}
