import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { fader } from 'src/app/route-animations';

@Component({
  animations: [fader],
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})

export class WelcomeScreenComponent { }
