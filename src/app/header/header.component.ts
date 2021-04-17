import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    collapsed = true;
    expandDropdown = false;

    constructor(private dataStorageService: DataStorageService) { }

    ngOnInit(): void {
    }

    toggle() {
        this.expandDropdown = !this.expandDropdown;
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
        this.toggle();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
        this.toggle();
    }
}