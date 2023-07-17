import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Button } from 'src/app/models/main-menu-buttons';
import { MenuButtonsProviderService } from 'src/app/services/menu-buttons-provider.service';

@Component({
  selector: 'app-menu-buttons-container',
  templateUrl: './menu-buttons-container.component.html',
  styleUrls: ['./menu-buttons-container.component.scss']
})

export class MenuButtonsContainerComponent implements OnInit, OnDestroy {

  router = inject(Router);
  location = inject(Location);
  menuButtonsProviderService = inject(MenuButtonsProviderService);
  subscription = new Subscription();
  buttons: any = [];

  ngOnInit() {
    console.log(this.location.path())
    if (this.location.path().length > 0) {
      // @ts-ignore
      this.buttons = this.menuButtonsProviderService[this.location.path()];
    } else {
      this.buttons = this.menuButtonsProviderService.welcomeScreenButtons

    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToRoute(buttonData: Button) {
    console.log(buttonData);
    this.createHistory(buttonData)
    if (buttonData.navigateData) {
      // @ts-ignore
      this.buttons = this.menuButtonsProviderService[buttonData.navigateData];
    }
  }

  createHistory(buttonData: Button) {
    this.location.replaceState(buttonData.route);
    window.history.pushState(null, '', '/' + buttonData.route)

  }
}
