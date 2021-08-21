import { Component, OnInit } from '@angular/core';
import { casos } from './casos';
import { DoadorListagemService } from './doador-listagem.service';

@Component({
  selector: 'app-doador-listagem',
  templateUrl: './doador-listagem.component.html',
  styleUrls: ['./doador-listagem.component.css']
})
export class DoadorListagemComponent implements OnInit {

  casos: casos[];

  constructor(private doadorListagemService: DoadorListagemService) { }

  ngOnInit(): void {
    this.doadorListagemService.listarCasos()
      .subscribe(casos => this.casos = casos);
  }
}
