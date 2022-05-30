import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from 'src/app/services/Auth/login.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  formLogin: FormGroup; // [formGroup]
  returnUrl: string;
  errorMsg: any;

  constructor(
    private formBuilder: FormBuilder,
    private serviceLogin: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // redirect to home if already logged in
    // if (this.serviceLogin.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    const { email, password } = this.formLogin.value
    this.serviceLogin.login(email, password).subscribe(
      result => {
        this.router.navigate([this.returnUrl]);
      },
      err => {
        console.log(err);
        this.errorMsg = Object.assign([], err);
        alert(this.errorMsg.error.message);
        this.formLogin.controls.password.reset();
      }
    )
  }
}
