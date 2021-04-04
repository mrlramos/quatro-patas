import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tipoUsuario : string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  usuario(tipoUsuario): void {

    if (tipoUsuario == 'doador') {
      this.tipoUsuario = 'doador';
    } else 
      this.tipoUsuario = 'ong';

  }

  btn_voltar(): void {
    this.router.navigate(['/']);
  }
}
