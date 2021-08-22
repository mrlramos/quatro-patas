import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { camposInvalidos } from '../shared/model/camposInvalidos';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tipoUsuario: string;
  camposInvalidos: Array<camposInvalidos> = [];

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

    this.validaCampos(form);

    // console.log(form.value);
    // this.cadastroService.createDoador(form.value)
    //   .subscribe(
    //     success => console.log("Success"),
    //     error => console.log(error),
    //     () => console.log("OK")
    //   );
  }

  validaCampos(form) {
    

    var patternNome = new RegExp("^[a-zA-Z ]+$");
    if (!patternNome.test(form.value.nome)) {
      console.log(this.camposInvalidos.push({mensagem: "Nome inválido, utilize apenas letras e o espaço!"}));
      console.log(this.camposInvalidos.push({mensagem: "Nome inválido, utilize apenas letras e o espaço!!"}));
      console.log(this.camposInvalidos.push({mensagem: "Nome inválido, utilize apenas letras e o espaço!!!"}));
      console.log(this.camposInvalidos[0].mensagem);
    }
    console.log(patternNome.test(form.value.nome));
    console.log(form.value.nome);

    for (let i = 0; i < this.camposInvalidos.length; i++) {
      console.log(this.camposInvalidos[i].mensagem);
    }

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
