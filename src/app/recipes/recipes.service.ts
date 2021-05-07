import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import * as ShoppingListActions from "../shopping-list/store/shopping-list.actions";
import * as fromAppStore from '../store/app.store';

@Injectable()
export class RecipesService {

    recipesChanged = new Subject<Recipe[]>();

    constructor(
        private store: Store<fromAppStore.AppState>
        ) {}

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'A Test Recipe', 
    //         'dynamic description', 
    //         'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
    //         [
    //             new Ingredient("sugar", "2"), 
    //             new Ingredient("lemon", "4")
    //         ]),
    //     new Recipe(
    //         'Wonderful Recipe', 
    //         'description - dynamic', 
    //         'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
    //         [
    //             new Ingredient("Apple", "10"), 
    //             new Ingredient("Pineapple", "8")
    //         ])
    // ];


    private recipes: Recipe[] = [];

    setRecipes(recipesList: Recipe[]) {
        this.recipes = recipesList;
        this.recipesChanged.next(this.recipes);
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngToShopList(ingredients: Ingredient[]) {
        // this.slService.addIngredients(ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number ,recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}