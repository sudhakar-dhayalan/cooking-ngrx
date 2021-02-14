import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    collapsed = true;

    @Output("displayComponent") showComponent = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    showRecipe(){
        this.showComponent.emit("Recipe");
    }

    showShoppingList() {
        this.showComponent.emit("ShopingList");
    }
}