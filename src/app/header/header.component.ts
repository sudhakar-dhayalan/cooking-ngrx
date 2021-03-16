import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    collapsed = true;
    expandDropdown = false;

    constructor() { }

    ngOnInit(): void {
    }

    toggle() {
        this.expandDropdown = !this.expandDropdown;
    }
}