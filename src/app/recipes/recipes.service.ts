import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'dynamic description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
        new Recipe('Test Recipe', 'description is added dynamically', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
        new Recipe('Wonderful Recipe', 'description - dynamic', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    recipeToBeShared = new EventEmitter<Recipe>();
}