import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {

    constructor(private slService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'dynamic description', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
            [
                new Ingredient("sugar", "2"), 
                new Ingredient("lemon", "4")
            ]),
        new Recipe(
            'Wonderful Recipe', 
            'description - dynamic', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
            [
                new Ingredient("Apple", "10"), 
                new Ingredient("Pineapple", "8")
            ])
    ];

    getRecipes() {
        return this.recipes;
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    recipeToBeShared = new EventEmitter<Recipe>();

    addIngToShopList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}