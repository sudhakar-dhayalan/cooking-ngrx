import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("recipe") recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onSelect() {
    this.recipesService.recipeToBeShared.emit(this.recipe);
  }
}
