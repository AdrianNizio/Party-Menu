import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsMenuComponent } from './components/cocktails/cocktails-menu/cocktails-menu.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { AddNewRecipeFormComponent } from './components/new-recipe/add-new-recipe-form/add-new-recipe-form.component';
import { TableWithItemsComponent } from './components/table/table-with-items/table-with-items.component';
import { FoodMenuComponent } from './components/food/food-menu/food-menu.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent, data: { animation: 'isLeft' } },
  { path: 'cocktails', component: CocktailsMenuComponent, data: { animation: 'isRight' } },
  { path: 'food', component: FoodMenuComponent, data: { animation: 'isRight' } },
  { path: 'all-items-list', component: TableWithItemsComponent, data: { animation: 'isRight' } },
  { path: 'create-new-item', component: AddNewRecipeFormComponent, data: { animation: 'isRight' } },
  { path: 'settings', component: WelcomeScreenComponent, data: { animation: 'isRight' } },
  { path: 'menus-menu', component: WelcomeScreenComponent, data: { animation: 'isRight' } },
  { path: 'add-new-recipe-menu', component: WelcomeScreenComponent, data: { animation: 'isRight' } },
  { path: 'view-menus-menu', component: WelcomeScreenComponent, data: { animation: 'isRight' } },
  { path: 'create-new-menus-menu', component: WelcomeScreenComponent, data: { animation: 'isRight' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



