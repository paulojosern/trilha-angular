import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/Auth/login.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  formLogin: FormGroup;
  message: string
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private serviceLogin: LoginService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }



  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    const { email, password } = this.formLogin.value;
    this.serviceLogin.login(email, password).subscribe(
      (result) => {
        this.message = ''
        this.router.navigate([this.returnUrl]);
      },
      (err) => this.message = err.error.message
    );
  }
}
