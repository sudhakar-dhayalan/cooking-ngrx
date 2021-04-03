import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  editItem: Ingredient;
  editMode = false;
  editItemIndex: number;

  @ViewChild('f', {static: false}) slForm: NgForm;
  constructor(private shoppingListSer: ShoppingListService) { }

  ngOnInit(): void {
     this.subscription = this.shoppingListSer.itemEditStarted.subscribe(
        (index: number) => {
          this.editItemIndex = index;
          this.editMode = true;
          this.editItem = this.shoppingListSer.getIngredient(index);

          this.slForm.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
          })
        }
    )
  }

  addIngredient(f: NgForm) {
    const value = f.value;
    const ingredient = new Ingredient(value.name, value.amount);
        
    if(this.editMode) {
      this.shoppingListSer.updateIngredient(this.editItemIndex, ingredient);
    } else {
      this.shoppingListSer.addIngredient(ingredient);      
    }
    this.editMode = false;
    f.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppingListSer.deleteIngredient(this.editItemIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
