import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe;
  constructor(private recipesService: RecipesService) { 
    }

  ngOnInit(): void {
    this.recipesService.recipeToBeShared.subscribe(
      (recipeObj: Recipe) => this.selectedRecipe = recipeObj
    );    
  }


}
