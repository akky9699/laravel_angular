import { Component } from '@angular/core'
import { Injectable } from '@angular/core';

import { AuthenticationService, TokenPayload, loginTokenPayload } from 'src/authentication.service';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: loginTokenPayload = {
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router,
    private toastr: ToastrService) {}

  login() {
    if (!this.credentials.email) {
      this.toastr.warning('enter email')
    } else if (!this.credentials.password) {
      this.toastr.warning('enter password')
    }else{
    this.auth.login(this.credentials).subscribe(
      (data) => {
        this.toastr.success('LogIn Successful');
        setTimeout(() => {
          this.router.navigateByUrl('/profile');
        }, 2000);
      },
      err => {
        this.toastr.warning(err.error.error)
        console.error(err)
      }
    )
  }
  }
}
