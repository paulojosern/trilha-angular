import { Component, OnInit } from '@angular/core';
import { LoginService, User } from 'src/app/services/Auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  constructor(
    private loginService: LoginService
  ) {

    this.loginService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.loginService.logout()
  }



}
