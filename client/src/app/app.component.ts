import { Component } from '@angular/core'
import { AuthenticationService } from 'src/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public auth: AuthenticationService) {}
}
