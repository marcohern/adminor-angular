import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/shared/models/token';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OauthService } from 'src/app/shared/services/oauth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public showPassword: boolean = false;
  disabled = '';
  active: any;
  constructor(
    private authservice: AuthService,
    private oauthservice: OauthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // firebase
  email = '';
  password = '';
  errorMessage = ''; // validation _error handle
  _error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  login() {
    this.email = this.loginForm.controls['username'].value;
    this.password = this.loginForm.controls['password'].value;
    console.log("login",this.email, this.password);
    this.disabled = "btn-loading";
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.oauthservice
        .login(this.email, this.password)
        .subscribe((token:Token) => {
          console.log(token);
          this.oauthservice.authorize(token);
          this.oauthservice.getUser()
            .subscribe((user:User) => {
              console.log(user);
              this.oauthservice.setUser(user);
              this.router.navigate(['/dashboard/sales-dashboard']);
            });
        },
        (error:HttpErrorResponse) => {
          this.errorMessage = "Email/password invalid"
          //this._error = error;
          this.disabled = '';
        });
        /*
      this.authservice
        .loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/dashboard/sales-dashboard']);
          console.clear();
        })
        .catch((_error: any) => {
          this._error = _error;
          this.router.navigate(['/']);
        });
        */
    }
  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  //angular
  public loginForm!: FormGroup;
  public error: any = '';

  get form() {
    return this.loginForm.controls;
  }

  Submit() {
    // this.disabled = 'btn-loading';
    if (
      this.loginForm.controls['username'].value === 'spruko@admin.com' &&
      this.loginForm.controls['password'].value === 'sprukoadmin'
    ) {
      this.router.navigate(['/dashboard/sales-dashboard']);
    } else {
      this.error = 'Please check email and passowrd';
    }
  }

  public togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
