import { AppRoutes } from '../constants/enums/app-routes';
import { Button } from '../constants/models/main-menu-buttons';
import { ButtonsByUrlLookupTable } from '../constants/models/lookup-table';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MenuButtonsProviderService {
    buttonClasses = 'btn btn-primary';

    sharedNavigationButtons: Button[] = [
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

    welcomeScreenSpecificButtons: Button[] = [
        {
            classes: this.buttonClasses,
            route: AppRoutes.TodaysMenuRoute,
            text: 'MenuButtons.TodaysMenu',
        },
    ];

    welcomeScreenButtons: Button[] = this.welcomeScreenSpecificButtons.concat(this.sharedNavigationButtons);

    sidebarSpecificButtons: Button[] = [
        {
            classes: this.buttonClasses,
            navigateData: '',
            route: AppRoutes.Empty,
            text: 'MenuButtons.MainMenu',
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

    buttonsByUrlLookupTable: ButtonsByUrlLookupTable = {
        'add-new-recipe-menu': this.newRecipeButtons,
        'create-new-menus-menu': this.dishMenuButtons,
        settings: this.settingsButtons,
        'view-menus-menu': this.dishMenuButtons,
    };

    getButtonsByUrl(url?: string): Button[] {
        if (url && this.buttonsByUrlLookupTable[url]) {
            return this.buttonsByUrlLookupTable[url];
        } else {
            return this.welcomeScreenButtons;
        }
    }
}
