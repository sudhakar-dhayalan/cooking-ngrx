import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ConsumerComponent } from './stepper/consumer/consumer.component';
import { ProducerComponent } from './stepper/producer/producer.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'recipes', loadChildren: () => import('./recipes/recipe.module').then(m => m.RecipeModule) },
  { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
  // { path: '', redirectTo: '/producer', pathMatch: 'full' },
  { path: 'producer', component: ProducerComponent },
  { path: 'consumer', component: ConsumerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
