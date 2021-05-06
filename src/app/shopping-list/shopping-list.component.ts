import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from "./store/shopping-list.store";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[]}>;

  subscriptionHolder: Subscription;
  constructor(
    private store: Store<fromShoppingList.AppState>
    ) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.shoppingListSer.getIngredients();
    // this.subscriptionHolder = this.shoppingListSer.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // )
  }

  ngOnDestroy() {
    // this.subscriptionHolder.unsubscribe();
  }

  onEditItem(index: number) {
    // this.shoppingListSer.itemEditStarted.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
  
}
