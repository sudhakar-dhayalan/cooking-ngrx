import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id;
  // @Input() 
  recipe: Recipe;
  constructor(private recipeSer: RecipesService, private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeSer.getRecipe(this.id);
    })

  }

  addToShoppingList() {
    this.recipeSer.addIngToShopList(this.recipe.ingredients);
  }

}
