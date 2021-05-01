import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipesComponent } from './../recipes/recipes.component';
import { RecipeListComponent } from './../recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './../recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './../recipes/recipe-detail/recipe-detail.component';
import { RecipeRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeDetailComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule
    ]
})
export class RecipeModule {

}