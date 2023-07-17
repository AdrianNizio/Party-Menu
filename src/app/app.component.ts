import { Component, OnInit, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { fader, slider, stepper } from './route-animations';

@Component({
  animations: [slider],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contexts = inject(ChildrenOutletContexts)
  title = 'cocktails';

  ngOnInit() {
    sessionStorage.setItem('isMixologistMode', 'false');
  }

  prepareRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
