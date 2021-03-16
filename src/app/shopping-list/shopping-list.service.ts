import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apple', '10'),
        new Ingredient('Orange', '8')
      ];

      getIngredients() {
          return this.ingredients;
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
      }
}