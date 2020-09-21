import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account = { email: 'kinedey869@faxapdf.com', password: '123456@!'};
  constructor(public _auth: AuthService, public _router: Router,) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm) {
    this._auth.login(this.account).subscribe(
      data => {
        this._auth.token = data.token;
        this._router.navigate(['/portal']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
