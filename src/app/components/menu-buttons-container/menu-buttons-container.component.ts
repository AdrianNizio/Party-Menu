import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-buttons-container',
  templateUrl: './menu-buttons-container.component.html',
  styleUrls: ['./menu-buttons-container.component.scss']
})
export class MenuButtonsContainerComponent implements OnInit, OnDestroy {

  router = inject(Router)
  timesClicked: number = 0;
  subscription = new Subscription();
  buttons: any = [];

  welcomeScreenButtons = [
    {
      buttonFunction: 'navigateToRoute',
      route: 'menus-menu',
      navigateData: 'dishMenuButtons',
      classes: 'btn btn-primary',
      text: 'Menus',
      type: 'navigateWithinMenuButtons'
    },
    {
      buttonFunction: 'navigateToTable',
      tableFilters: '',
      route: 'all-items-list',
      classes: 'btn btn-primary',
      text: 'List of all recipes'
    },
    {
      buttonFunction: 'navigateToRoute',
      route: 'add-new-recipe-menu',
      navigateData: 'newRecipeButtons',
      classes: 'btn btn-primary',
      text: 'Add new recipe',
      type: 'navigateWithinMenuButtons'
    },
    {
      buttonFunction: 'navigateToRoute',
      route: 'settings',
      navigateData: 'settingsButtons',
      classes: 'btn btn-secondary',
      text: 'Settings',
      type: 'navigateWithinMenuButtons'
    }
  ]

  dishMenuButtons = [
    {
      buttonFunction: 'navigateToRoute',
      route: 'view-menus-menu',
      navigateData: 'dishMenuButtons2',
      classes: 'btn btn-primary',
      text: 'View menus',
      type: 'navigateWithinMenuButtons'
    },
    {
      buttonFunction: 'navigateToRoute',
      route: 'create-new-menus-menu',
      navigateData: 'dishMenuButtons2',
      classes: 'btn btn-primary',
      text: 'Create new menu',
      type: 'navigateWithinMenuButtons'
    },
  ]

  dishMenuButtons2 = [
    {
      buttonFunction: 'navigateToTable',
      tableFilters: '',
      route: 'all-items-list',
      classes: 'btn btn-primary',
      text: 'Alcohol'
    },
    {
      buttonFunction: 'navigateToTable',
      tableFilters: '',
      route: 'all-items-list',
      classes: 'btn btn-primary',
      text: 'Food'
    },
    {
      buttonFunction: 'navigateToTable',
      tableFilters: '',
      route: 'all-items-list',
      classes: 'btn btn-primary',
      text: 'All'
    },
    {
      buttonFunction: 'navigateToTable',
      tableFilters: '',
      route: 'all-items-list',
      classes: 'btn btn-primary',
      text: 'Combined'
    }
  ]

  newRecipeButtons = [
    {
      buttonFunction: 'navigateToRoute',
      route: 'create-new-item',
      classes: 'btn btn-primary',
      text: 'Alcohol'
    },
    {
      buttonFunction: 'navigateToRoute',
      route: 'create-new-item',
      classes: 'btn btn-primary',
      text: 'Food'
    },
  ]

  ngOnInit() {
    this.buttons = this.newRecipeButtons
    this.subscription.add(
      this.router.events.subscribe((val) => { console.log('h') })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToRoute(routePath: string) {
    this.router.navigate([routePath]);
  }

  enableMixologistMode() {
    this.timesClicked++;
    if (this.timesClicked >= 4) {
      sessionStorage.setItem('isMixologistMode', 'true');
    }
  }

  buttonFunction(functionName: string, args1?: string, args2?: string) {
    //@ts-ignore
    this[functionName]();
  }
}
