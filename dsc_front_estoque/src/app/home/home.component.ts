import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private loginService: LoginService) {}

  logOut(): void {
    this.loginService.logout();
    window.location.reload();
  }

}
