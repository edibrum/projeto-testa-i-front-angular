import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    console.log(`LOGIN()`);
    console.log(`username: ${this.username}`);
    console.log(`password: ${this.password}`);
    if (this.username === 'userAdmin' && this.password === 'admin@123') {
      this.router.navigate(['/home']); // Redireciona para a página inicial
    } else {
      alert('Credenciais inválidas');
    }
  }

}
