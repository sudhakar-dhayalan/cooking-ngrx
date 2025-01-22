import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";
import * as fromAppStore from '../store/app.store';

import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard  {

    constructor(private authService: AuthService, private router: Router, private store: Store<fromAppStore.AppState>) {}

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        return this.store.select('auth').pipe(
            take(1),
            map(authState => {
                return authState.user;
            }),
            map(user => {
            // return !!user;
            if(user) {
                return true;
            } 
            return this.router.createUrlTree(['/auth']);
        }))
    }
}