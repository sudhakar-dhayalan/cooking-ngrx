import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("recipe") recipe;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() recipeItem = new EventEmitter<void>();
  onSelect() {
    this.recipeItem.emit();
  }
}
