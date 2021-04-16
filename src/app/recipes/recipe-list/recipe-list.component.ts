import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.recipesService.recipesChanged.subscribe(
      (recipeList: Recipe[]) => {
          this.recipes = recipeList;
      }
    );
    this.recipes = this.recipesService.getRecipes();
  }

  showNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute})
  }
}
