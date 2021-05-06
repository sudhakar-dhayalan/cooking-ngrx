import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import * as fromAppStore from '../store/app.store';
import * as AuthActions from './store/auth.actions';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenExpirationTimer: any;

  // user = new Subject<User>();
  // user = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient, 
    private router: Router,
    private store: Store<fromAppStore.AppState>
    ) { }

  signup(mail: string, passwd: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseApiKey,
        {
          email: mail,
          password: passwd,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  login(mail: string, passwd: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseApiKey,
      {
        email: mail,
        password: passwd,
        returnSecureToken: true
      }
    )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string,
      password: string,
      _token: string,
      _tokenExpirationDate: string
    }
      = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return null;
    }

    const loadUser = new User(userData.email, userData.password, userData._token, new Date(userData._tokenExpirationDate));

    if (userData._token) {
      // this.user.next(loadUser);
      this.store
        .dispatch(
          new AuthActions.Login({
            email: loadUser.email,
            userId: loadUser.password,
            token: loadUser.token,
            expirationDate: new Date(userData._tokenExpirationDate)
          })
      );
      const expiresIn = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expiresIn);
    }
  }

  logout() {
    // this.user.next(null);
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    console.log('timer ' + this.tokenExpirationTimer );
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(
      () => {
        this.logout();
      }, expirationDuration)
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    // this.user.next(user);
    this.store
      .dispatch(
        new AuthActions.Login({
          email: email,
          userId: userId,
          token: token,
          expirationDate: expirationDate
    }))
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let error = "An unkown error occured";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(error);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        error = "This email is already registered";
        break;
      case 'EMAIL_NOT_FOUND':
        error = "This email does not exist";
        break;
      case 'INVALID_PASSWORD':
        error = "Password entered is not correct";
        break;
    }
    return throwError(error);
  }
}
