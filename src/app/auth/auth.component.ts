import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService, Errors } from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = {message: '', errors: {}};
  isSubmitting = false;
  authForm: FormGroup;
  profile = environment.profile;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': [''],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
      } else {
        this.authForm.addControl('identifier', new FormControl());
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {message: '', errors: {}};

    const credentials = this.authForm.value;
    this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe(
      data => this.router.navigateByUrl('/admin'),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }
}
