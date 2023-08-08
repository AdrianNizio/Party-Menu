import { Component, OnInit, inject } from '@angular/core';
import { Button } from 'src/app/shared/constants/models/main-menu-buttons';
import { MenuButtonsProviderService } from 'src/app/shared/services/menu-buttons-provider.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-nav-container',
    styleUrls: ['./side-nav-container.component.scss'],
    templateUrl: './side-nav-container.component.html',
})
export class SideNavContainerComponent implements OnInit {
    buttons: Button[] = [];
    menuButtonsProviderService = inject(MenuButtonsProviderService);
    router = inject(Router);

    ngOnInit(): void {
        this.buttons = this.menuButtonsProviderService.sidebarSpecificButtons.concat(this.menuButtonsProviderService.sharedNavigationButtons);
    }

    navigateToRoute(buttonData: Button): void {
        this.router.navigate([buttonData.route]);
    }
}
