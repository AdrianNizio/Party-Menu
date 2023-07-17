import { Injectable } from '@angular/core';
import { Button } from '../models/main-menu-buttons';

@Injectable({
  providedIn: 'root'
})

export class MenuButtonsProviderService {
  buttonsRoutes = {
    welcomeScreenButtons: [],
    dishMenuButtons: [],
    dishMenuButtons2: [],
    newRecipeButtons: [],
  }


  welcomeScreenButtons: Button[] = [
    {
      route: 'menus-menu',
      navigateData: 'dishMenuButtons',
      classes: 'btn btn-primary',
      text: 'Menus',
    },
    {
      route: 'all-items-list',
      tableFilters: '',
      classes: 'btn btn-primary',
      text: 'List of all recipes'
    },
    {
      route: 'add-new-recipe-menu',
      navigateData: 'newRecipeButtons',
      classes: 'btn btn-primary',
      text: 'Add new recipe',
    },
    {
      route: 'settings',
      navigateData: 'settingsButtons',
      classes: 'btn btn-secondary',
      text: 'Settings',
    }
  ]

  dishMenuButtons: Button[] = [
    {
      route: 'view-menus-menu',
      navigateData: 'dishMenuButtons2',
      classes: 'btn btn-primary',
      text: 'View menus',
    },
    {
      route: 'create-new-menus-menu',
      navigateData: 'dishMenuButtons2',
      classes: 'btn btn-primary',
      text: 'Create new menu',
    },
  ]

  dishMenuButtons2: Button[] = [
    {
      tableFilters: '',
      route: 'all-items-list',
      classes: 'btn btn-primary',
      text: 'Alcohol'
    },
    {
      tableFilters: '',
      route: 'all-items-list',
      classes: 'btn btn-primary',
      text: 'Food'
    },
    {
      tableFilters: '',
      route: 'all-items-list',
      classes: 'btn btn-primary',
      text: 'All'
    },
    {
      tableFilters: '',
      route: 'all-items-list',
      classes: 'btn btn-primary',
      text: 'Combined'
    }
  ]

  newRecipeButtons: Button[] = [
    {
      route: 'create-new-item',
      classes: 'btn btn-primary',
      text: 'Alcohol'
    },
    {
      route: 'create-new-item',
      classes: 'btn btn-primary',
      text: 'Food'
    },
  ]

  getButtonsByUrl() {

  }
}
