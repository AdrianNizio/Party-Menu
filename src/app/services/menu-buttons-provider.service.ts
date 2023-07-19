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
            text: 'Menus',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'List of all recipes',
        },
        {
            classes: this.buttonClasses,
            navigateData: 'newRecipeButtons',
            route: AppRoutes.NewRecipeMenuRoute,
            text: 'Add new recipe',
        },
        {
            classes: 'btn btn-secondary',
            navigateData: 'settingsButtons',
            route: AppRoutes.SettingsRoute,
            text: 'Settings',
        },
    ];

    dishMenuButtons: Button[] = [
        {
            classes: this.buttonClasses,
            navigateData: 'dishMenuButtons2',
            route: AppRoutes.ViewMenusMenuRoute,
            text: 'View menus',
        },
        {
            classes: this.buttonClasses,
            navigateData: 'dishMenuButtons2',
            route: AppRoutes.CreateNewMenusMenuRoute,
            text: 'Create new menu',
        },
    ];

    dishMenuButtons2: Button[] = [
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'Alcohol',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'Food',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'All',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.TableRoute,
            tableFilters: '',
            text: 'Combined',
        },
    ];

    newRecipeButtons: Button[] = [
        {
            classes: this.buttonClasses,
            route: AppRoutes.NewItemRoute,
            text: 'Alcohol',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.NewItemRoute,
            text: 'Food',
        },
    ];

    settingsButtons: Button[] = [
        {
            classes: this.buttonClasses,
            route: AppRoutes.NewItemRoute,
            text: 'Alcohol',
        },
        {
            classes: this.buttonClasses,
            route: AppRoutes.NewItemRoute,
            text: 'Food',
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
