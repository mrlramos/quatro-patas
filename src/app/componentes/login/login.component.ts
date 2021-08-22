import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioIncorreto: boolean;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (window.localStorage.length > 0 && window.localStorage.getItem('user').split("@").length > 1) {
      this.router.navigate(['/doador']);
    } else if (window.localStorage.length > 0 && window.localStorage.getItem('user').split("@").length == 1) {
      this.router.navigate(['/ong']);
    }
  }

  async onSubmitLogin(dados) {
    let tipoUsuario;
    
    tipoUsuario = await this.loginService.login(dados.value);

    console.log(tipoUsuario);

    if (tipoUsuario == 1) {
      this.router.navigate(['/doador']);
    } else if (tipoUsuario == 2) {
      this.router.navigate(['/ong']);
    } else {
      this.usuarioIncorreto = true;
    }
  }
  
}
