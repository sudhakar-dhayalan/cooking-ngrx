import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeResolverService  {
    
    constructor(private dataStrorageService: DataStorageService, private recipeService: RecipesService) {}

    resolve(activatedRoute: ActivatedRouteSnapshot, route: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();
        if(recipes.length !== 0) {
            return recipes;
        }
        return this.dataStrorageService.fetchRecipes();
    }
} 