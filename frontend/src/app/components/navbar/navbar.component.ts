import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = null;
  role=null;
  constructor(private router:Router,public login:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
    console.log(this.user);
  }
  OnLoginClick()
  {
    this.router.navigate(["login"]);
  }
  OnRegisterClick()
  {
    this.router.navigate(["signup"]);
  }
  public logout() {
    this.login.logout();
    this.router.navigate(["login"]);
    this.login.loginStatusSubject.next(false);
    window.location.reload();
  }
  public OnProfile()
  {
    this.router.navigate(["profile"])
  }
  OnDeliveryClick()
  {
    this.router.navigate(["userdashboard"]);
  }
}
