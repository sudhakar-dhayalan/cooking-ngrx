import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[]

    constructor(name: string, descrip: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = descrip;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}