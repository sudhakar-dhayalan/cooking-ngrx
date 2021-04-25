import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from '../auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isSignUpMode = true;

  isLoading = false;

  error: string = null;

  onSwitch() {
    this.isSignUpMode = !this.isSignUpMode;
  }

  onSubmit(form: NgForm) {
    this.error = null;

    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    let obs: Observable<AuthResponseData>;

    if (!this.isSignUpMode) {
      obs = this.authService.login(email, password);
    } else {
      obs = this.authService.signup(email, password);
    }

    obs.subscribe(
      response => {
        this.isLoading = false;
        console.log(response);
        this.router.navigate(['/recipes']);
      },
      errorRes => {
        this.isLoading = false;
        this.error = errorRes;
        console.log(errorRes);
      }
    );

    form.reset();
  }

  closeModal() {
    this.error = null;
  }
}
