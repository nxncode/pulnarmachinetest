import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  message: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.username == "pulnar" && this.password == "pulnar123") {
      console.log("logged IN");
      this.message = "";
      sessionStorage.setItem("isLoggedIn", 'true');
      this.router.navigate(['/home']);

    } else {
      this.message = "Invalid Username or Password. Please try again.";
    }
  }
}
