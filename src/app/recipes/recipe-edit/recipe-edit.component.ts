import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id;
  editMode = false;
  recipeForm: UntypedFormGroup;

  subscription: Subscription;

  constructor(private ar: ActivatedRoute, private recipeService: RecipesService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.ar.params.subscribe((params: Params) => {
      this.id = params['id'] ? +params['id'] : null;
      this.initForm();
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSumbit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }

  recipeIngredients = new UntypedFormArray([]);

  initForm() {
    let name = '';
    let url = '';
    let imgDescription = '';

    this.editMode = this.id != null;

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      url = recipe.imageUrl;
      imgDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          this.recipeIngredients.push(
            new UntypedFormGroup({
              'name': new UntypedFormControl(ingredient.name, Validators.required),
              'amount': new UntypedFormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }

    this.recipeForm = new UntypedFormGroup({
      'name': new UntypedFormControl(name, Validators.required),
      'imageUrl': new UntypedFormControl(url, Validators.required),
      'description': new UntypedFormControl(imgDescription, Validators.required),
      'ingredients': this.recipeIngredients
    });
  }

  get controls() {
    return (<UntypedFormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<UntypedFormArray>this.recipeForm.get('ingredients')).push(
      new UntypedFormGroup({
        'name': new UntypedFormControl(null, Validators.required),
        'amount': new UntypedFormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.ar });
  }

  onDeleteIngredient(index: number) {
    (<UntypedFormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
