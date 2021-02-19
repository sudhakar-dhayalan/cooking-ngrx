import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  constructor(private shoppingListSer: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    const nameIng = this.nameInputRef.nativeElement.value;
    const amountIng = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(nameIng, amountIng);
    this.shoppingListSer.addIngredient(ingredient);
  }

}
