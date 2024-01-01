import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginInvalid = false;
  usuario = '';
  senha = '';

  constructor(private login: LoginService, private router: Router) {}

  fazerLogin(): void {
    this.login.login(this.usuario, this.senha).subscribe(
      (res) => {
        if (res.token) {
          this.login.autenticado = true;
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        this.loginInvalid = true;
      }
    );
  }
}
