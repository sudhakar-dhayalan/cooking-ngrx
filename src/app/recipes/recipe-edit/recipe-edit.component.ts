import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id;
  editMode = false;
  recipe: Recipe;
  constructor(private ar: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      this.id = +params['id']
    })
    this.editMode = this.id != null;
    if(this.editMode) {
      this.recipe = this.recipeService.getRecipe(this.id);
    }
  }

}
