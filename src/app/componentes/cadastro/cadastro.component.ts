import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tipoUsuario: string;

  constructor(private router: Router, private cadastroService: CadastroService) {
  }

  ngOnInit(): void {}

  usuario(tipoUsuario): void {
    if (tipoUsuario == 'doador') {
      this.tipoUsuario = 'doador';
    } else 
      this.tipoUsuario = 'ong';
  }

  btnVoltar(): void {
    this.router.navigate(['/']);
  }

  onSubmitDoador(form): void {
    console.log(form.value);
    this.cadastroService.createDoador(form.value)
      .subscribe(
        success => console.log("Success"),
        error => console.log(error),
        () => console.log("OK")
      );
  }

  onSubmitOng(form): void {
    console.log(form.value);

    this.cadastroService.test(form.value);
      // .subscribe(
      //   success => console.log("Success"),
      //   error => console.log(error),
      //   () => console.log("OK")
      // );
  }
}
