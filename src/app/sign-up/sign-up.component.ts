import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './../services/Auth/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formSignUp: FormGroup; // [formGroup]
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit(): void {

    this.formSignUp = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.register(this.formSignUp.value).subscribe(
      res => {
        console.log(res)
        alert('Criação de conta concluída!');
      }
    );
  }

  // ainda não faz nada
  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
