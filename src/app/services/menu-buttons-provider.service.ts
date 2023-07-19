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
            route: AppRoutes.MenusMenuRoute,
            navigateData: 'dishMenuButtons',
            classes: this.buttonClasses,
            text: 'Menus',
        },
        {
            route: AppRoutes.TableRoute,
            tableFilters: '',
            classes: this.buttonClasses,
            text: 'List of all recipes',
        },
        {
            route: AppRoutes.NewRecipeMenuRoute,
            navigateData: 'newRecipeButtons',
            classes: this.buttonClasses,
            text: 'Add new recipe',
        },
        {
            route: AppRoutes.SettingsRoute,
            navigateData: 'settingsButtons',
            classes: 'btn btn-secondary',
            text: 'Settings',
        },
    ];

    dishMenuButtons: Button[] = [
        {
            route: AppRoutes.ViewMenusMenuRoute,
            navigateData: 'dishMenuButtons2',
            classes: this.buttonClasses,
            text: 'View menus',
        },
        {
            route: AppRoutes.CreateNewMenusMenuRoute,
            navigateData: 'dishMenuButtons2',
            classes: this.buttonClasses,
            text: 'Create new menu',
        },
    ];

    dishMenuButtons2: Button[] = [
        {
            tableFilters: '',
            route: AppRoutes.TableRoute,
            classes: this.buttonClasses,
            text: 'Alcohol',
        },
        {
            tableFilters: '',
            route: AppRoutes.TableRoute,
            classes: this.buttonClasses,
            text: 'Food',
        },
        {
            tableFilters: '',
            route: AppRoutes.TableRoute,
            classes: this.buttonClasses,
            text: 'All',
        },
        {
            tableFilters: '',
            route: AppRoutes.TableRoute,
            classes: this.buttonClasses,
            text: 'Combined',
        },
    ];

    newRecipeButtons: Button[] = [
        {
            route: AppRoutes.NewItemRoute,
            classes: this.buttonClasses,
            text: 'Alcohol',
        },
        {
            route: AppRoutes.NewItemRoute,
            classes: this.buttonClasses,
            text: 'Food',
        },
    ];

    settingsButtons: Button[] = [
        {
            route: AppRoutes.NewItemRoute,
            classes: this.buttonClasses,
            text: 'Alcohol',
        },
        {
            route: AppRoutes.NewItemRoute,
            classes: this.buttonClasses,
            text: 'Food',
        },
    ];

    buttonsByUrlLookupTable: ButtonsByUrlLookupTable = {
        'menus-menu': this.dishMenuButtons,
        'view-menus-menu': this.dishMenuButtons2,
        'create-new-menus-menu': this.dishMenuButtons2,
        'add-new-recipe-menu': this.newRecipeButtons,
        settings: this.settingsButtons,
    };

    getButtonsByUrl(url: string) {
        if (url) {
            return this.buttonsByUrlLookupTable[url];
        } else {
            return this.welcomeScreenButtons;
        }
    }
}
