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
      route: 'cocktails',
      classes: 'btn btn-primary',
      text: 'Menu'
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
      classes: 'btn btn-primary',
      text: 'Add new recipe'
    },
    {
      buttonFunction: 'navigateToRoute',
      route: 'settings',
      classes: 'btn btn-secondary',
      text: 'Settings'
    }
  ]

  dishMenuButtons = [
    {
      buttonFunction: 'navigateToRoute',
      route: 'view-menus-menu',
      classes: 'btn btn-primary',
      text: 'View menus'
    },
    {
      buttonFunction: 'navigateToRoute',
      route: 'create-new-menus-menu',
      classes: 'btn btn-primary',
      text: 'Create new menu'
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
