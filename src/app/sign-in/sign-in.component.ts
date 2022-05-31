import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/Auth/login.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private serviceLogin: LoginService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.email,
          Validators.required,
          Validators.maxLength(50),
        ]),
      ],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { email, password } = this.formLogin.value;
    this.serviceLogin.login(email, password).subscribe(
      (result) => {
        confirm('ACERTOOU');
      },
      (err) => {
        confirm('ERROOOU');
      }
    );
  }
}
