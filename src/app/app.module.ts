import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsumerComponent } from './stepper/consumer/consumer.component';
import { ProducerComponent } from './stepper/producer/producer.component';
import { SharedModule } from './shared/shared.module';
import { DialogComponent } from './stepper/dialog/dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { CoreModule } from './core.module';
import * as fromAppStore from './store/app.store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsumerComponent,
    ProducerComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromAppStore.appReducer),
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,

    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    // ShoppingListService, 
    // RecipesService, 
    // DataStorageService, 
    // RecipeResolverService, 
    // AuthInterceptorService,
    // AuthGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
