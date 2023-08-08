import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Button } from 'src/app/shared/constants/models/main-menu-buttons';
import { Location } from '@angular/common';
import { MenuButtonsProviderService } from 'src/app/shared/services/menu-buttons-provider.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu-buttons-container',
    styleUrls: ['./menu-buttons-container.component.scss'],
    templateUrl: './menu-buttons-container.component.html',
})
export class MenuButtonsContainerComponent implements OnInit, OnDestroy {
    router = inject(Router);
    location = inject(Location);
    menuButtonsProviderService = inject(MenuButtonsProviderService);
    subscription = new Subscription();
    buttons: Button[] = [];

    ngOnInit(): void {
        this.buttons = this.menuButtonsProviderService.getButtonsByUrl(this.location.path().replace(/^\/+|\/+$/g, ''));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    navigateToRoute(buttonData: Button): void {
        this.router.navigate([buttonData.route]);
        if (buttonData.navigateData) {
            this.buttons = this.menuButtonsProviderService[buttonData.navigateData as keyof MenuButtonsProviderService] as Button[];
        }
    }
}
