import { Component } from '@angular/core';
import { fader } from 'src/app/route-animations';

@Component({
    animations: [fader],
    selector: 'app-welcome-screen',
    styleUrls: ['./welcome-screen.component.scss'],
    templateUrl: './welcome-screen.component.html',
})
export class WelcomeScreenComponent {}
