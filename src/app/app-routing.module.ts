import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsMenuComponent } from './components/cocktails/cocktails-menu/cocktails-menu.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { AddNewRecipeFormComponent } from './components/new-recipe/add-new-recipe-form/add-new-recipe-form.component';
import { TableWithItemsComponent } from './components/table/table-with-items/table-with-items.component';
import { FoodMenuComponent } from './components/food/food-menu/food-menu.component';
import { AppRoutes } from './enums/app-routes';

const routes: Routes = [
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
        path: AppRoutes.MenusMenuRoute,
    },
    {
        component: WelcomeScreenComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.NewRecipeMenuRoute,
    },
    {
        component: WelcomeScreenComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.ViewMenusMenuRoute,
    },
    {
        component: WelcomeScreenComponent,
        data: { animation: 'isRight' },
        path: AppRoutes.CreateNewMenusMenuRoute,
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
