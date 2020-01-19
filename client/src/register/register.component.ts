import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "src/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: "./register.component.html"
})
export class RegisterComponent {
  credentials: TokenPayload = {
    id: 0,
    name: "",
    // last_name: "",
    email: "",
    password: ""
  };

  constructor(private auth: AuthenticationService, private router: Router,private toastr: ToastrService) {}

  register() {
    if (!this.credentials.name) {
      this.toastr.warning('enter name')
    } else if (!this.credentials.email) {
      this.toastr.warning('enter password')
    }else if (!this.credentials.password) {
      this.toastr.warning('enter password')
    }else{
    this.auth.register(this.credentials).subscribe(
      () => {
        this.toastr.success('Register Successfully');
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 2000);
      },
      err => {
        let final_error = JSON.parse(err.error);
        if(final_error.hasOwnProperty('name')){
          this.toastr.warning(final_error.name[0]);
        }
        if(final_error.hasOwnProperty('name')){
          this.toastr.warning(final_error.password[0]);
        }
        if(final_error.hasOwnProperty('name')){
          this.toastr.warning(final_error.email[0]);
        }
        console.error(err);
      }
    )
  };
  }
}
