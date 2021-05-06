import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from "./../store/shopping-list.store";
import * as fromAppStore from '../../store/app.store';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  editItem: Ingredient;
  editMode = false;

  @ViewChild('f', { static: false }) slForm: NgForm;
  constructor(private store: Store<fromAppStore.AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editItem = stateData.editedIngredient;
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      } else {
        this.editMode = false;
      }
    });
  }

  addIngredient(f: NgForm) {
    const value = f.value;
    const ingredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      // this.shoppingListSer.updateIngredient(this.editItemIndex, ingredient);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(ingredient))
    } else {
      // this.shoppingListSer.addIngredient(ingredient);      
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }
    this.editMode = false;
    f.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
    // this.shoppingListSer.deleteIngredient(this.editItemIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

}
