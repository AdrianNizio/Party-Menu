import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-party-menu-navbar',
    styleUrls: ['./party-menu-navbar.component.scss'],
    templateUrl: './party-menu-navbar.component.html',
})
export class PartyMenuNavbarComponent {
    @Input() drawerButton: TemplateRef<unknown>;
}
