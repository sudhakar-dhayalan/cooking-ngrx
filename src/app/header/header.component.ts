import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

    userSubscription = new Subscription();

    collapsed = true;
    expandDropdown = false;
    isAuthenticated = false;

    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        console.log('header component')
        this.userSubscription = this.authService.user.subscribe(
            user => {
                // if(userData) {
                //     this.isAuthenticated = true;
                // }
                this.isAuthenticated = !!user;
            });
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

    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}