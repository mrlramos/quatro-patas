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
    } else {
      this.doadorListagemService.getNomeDoador().subscribe(casos => this.doador = casos);

      this.doadorListagemService.listarCasos()
        .subscribe(casos => this.casos = casos);
    }
  }

  deslogar() {
    window.localStorage.removeItem("user");
    this.router.navigate(['/']);
  }
}
