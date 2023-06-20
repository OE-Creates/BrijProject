import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  
  constructor(private router: Router) {}

  username: any
  password: any

  userCredentials = {
    usrnme: "",
    psswrd: ""
  }
  
  verifyCredentials() {
    if (this.username == "yourname@gmail.com" && this.password == "Password.0707") {
      this.userCredentials.usrnme = this.username
      this.userCredentials.psswrd = this.password
      localStorage.setItem("loggedInUser", JSON.stringify(this.userCredentials))
      this.router.navigate(['/dashboard'])
    }
    else {
      alert("Wrong username/password entered. Please try again.")
    }
  }

  ngOnInit() {
    
  }

}
