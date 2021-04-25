import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { CommonModule } from '@angular/common';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipesService } from './recipes/recipes.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { AuthenticateComponent } from './auth/authenticate/authenticate.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ConsumerComponent } from './stepper/consumer/consumer.component';
import { ProducerComponent } from './stepper/producer/producer.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthGuard } from './auth/auth.guard';
import { AlertComponent } from './shared/alert/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    DropdownDirective,
    AuthenticateComponent,
    LoadingSpinnerComponent,
    ConsumerComponent,
    ProducerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    ShoppingListService, 
    RecipesService, 
    DataStorageService, 
    RecipeResolverService, 
    AuthInterceptorService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
