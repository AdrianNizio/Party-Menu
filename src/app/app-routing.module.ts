import { RouterModule, Routes } from '@angular/router';
import { AddNewRecipeFormComponent } from './core/features/new-recipe/add-new-recipe-form/add-new-recipe-form.component';
import { AppRoutes } from './shared/constants/enums/app-routes';
import { CocktailsMenuComponent } from './core/features/menus/cocktails/cocktails-menu/cocktails-menu.component';
import { FoodMenuComponent } from './core/features/menus/food/food-menu/food-menu.component';
import { NgModule } from '@angular/core';
import { TableWithItemsComponent } from './core/features/table/table-with-items/table-with-items.component';
import { WelcomeScreenComponent } from './core/features/welcome-screen/welcome-screen.component';

const routes: Routes = [
    {
        component: CocktailsMenuComponent,
        data: { animation: 'isLeft' },
        path: AppRoutes.Mixologist,
    },
    {
        component: WelcomeScreenComponent,
        data: { animation: 'isLeft' },
        path: AppRoutes.Empty,
    },
    {
        component: CocktailsMenuComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.CocktailsRoute,
    },
    {
        component: FoodMenuComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.FoodRoute,
    },
    {
        component: TableWithItemsComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.TableRoute,
    },
    {
        component: AddNewRecipeFormComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.NewItemRoute,
    },
    {
        component: WelcomeScreenComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.SettingsRoute,
    },
    {
        component: WelcomeScreenComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.NewRecipeMenuRoute,
    },
    {
        component: WelcomeScreenComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.ViewMenusRoute,
    },
    {
        component: AddNewRecipeFormComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.CreateNewMenusRoute,
    },
    {
        component: CocktailsMenuComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.TodaysMenuRoute,
    },
    {
        component: WelcomeScreenComponent,
        data: { animation: 'isLeft' },
        path: AppRoutes.WildCard,
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
