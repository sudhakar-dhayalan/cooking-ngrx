import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    name: String;
    description: String;
    imagePath: String;
    ingredients: Ingredient[]

    constructor(name: String, descrip: String, imagePath: String, ingredients: Ingredient[]) {
        this.name = name;
        this.description = descrip;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}