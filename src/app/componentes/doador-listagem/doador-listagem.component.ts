import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { casos } from './casos';
import { DoadorListagemService } from './doador-listagem.service';

@Component({
  selector: 'app-doador-listagem',
  templateUrl: './doador-listagem.component.html',
  styleUrls: ['./doador-listagem.component.css']
})
export class DoadorListagemComponent implements OnInit {

  casos: casos[];
  doador: string;

  constructor(private doadorListagemService: DoadorListagemService, private router: Router) { }

  ngOnInit(): void {
    if (window.localStorage.length < 1) {
      this.router.navigate(['/']);
    } else if (window.localStorage.getItem('user').split("@").length == 1) {
      this.router.navigate(['/ong']);
    } else {
      this.doadorListagemService.getNomeDoador().subscribe(casos => this.doador = casos);

      this.doadorListagemService.listarCasos()
        .subscribe(casos => this.casos = casos);
    }
  }

  paginaDetalhe(id) {
    this.router.navigate(['/doador/detalhe/' + id], {state: {doador: this.doador }});
  }

  // routerLink="/doador/detalhe/{{ caso.id }}"

  deslogar() {
    window.localStorage.removeItem("user");
    this.router.navigate(['/']);
  }
}
