import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  recipeForm: FormGroup;

  constructor(private ar: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initForm();
    })
  }

  onSumbit() {
    console.log(this.recipeForm);
  }

  initForm() {
    let name = '';
    let url = '';
    let description = '';

    this.editMode = this.id != null;

    if(this.editMode) {
      this.recipe = this.recipeService.getRecipe(this.id);
      name = this.recipe.name;
      url = this.recipe.imagePath;
      description = this.recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name),
      'imageUrl': new FormControl(url),
      'imageDescription': new FormControl(description)
    });
  }

}
