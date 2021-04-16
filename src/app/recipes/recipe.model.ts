import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    name: string;
    description: string;
    imageUrl: string;
    ingredients: Ingredient[]

    constructor(name: string, descrip: string, imageUrl: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = descrip;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
    }
}