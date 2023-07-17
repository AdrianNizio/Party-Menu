import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { fader } from '../route-animations';

@Component({
  animations: [fader],
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {
  router = inject(Router)
  timesClicked: number = 0;

  menuButtons = [
    {
      buttonFunction: 'navigateToCocktailsList',
      classes: 'btn btn-primary',
      text: 'Menu'
    },
    {
      buttonFunction: 'enableMixologistMode',
      classes: 'btn btn-secondary',
      text: 'Placeholder'
    },
    {
      buttonFunction: 'dummyFunction',
      classes: 'btn btn-danger',
      text: 'Placeholder'
    }
  ]

  navigateToCocktailsList() {
    this.router.navigate(['cocktails']);
  }

  dummyFunction() {

  }

  enableMixologistMode() {
    this.timesClicked++;
    if (this.timesClicked >= 4) {
      sessionStorage.setItem('isMixologistMode', 'true');
    }
  }

  buttonFunction(functionName: string) {
    //@ts-ignore
    this[functionName]();
  }
}
