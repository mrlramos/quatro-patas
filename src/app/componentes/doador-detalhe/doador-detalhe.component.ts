import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { casos } from '../doador-listagem/casos';
import { DoadorDetalheService } from './doador-detalhe.service';
import { ong } from './ong';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-doador-detalhe',
  templateUrl: './doador-detalhe.component.html',
  styleUrls: ['./doador-detalhe.component.css']
})
export class DoadorDetalheComponent implements OnInit {

  caso: casos = {
    id: null,
    id_ong: null,
    id_doador: null,
    nome: null,
    valor: null,
    descricao: null,
    imagem: null
  };

  contato: ong = {
    id: null,
    id_endereco: null,
    login: null,
    senha: null,
    nome: null,
    qtd_animais: null,
    celular: null,
    email: null
  };

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private service: DoadorDetalheService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (window.localStorage.length < 1) {
      this.router.navigate(['/']);
    }

    const id = this.route.snapshot.paramMap.get('id');

    this.service.listarCasosPorId(id).subscribe(casos => 
        this.caso = casos
    );    

    // this.caso.imagem = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    //              + this.caso.imagem.base64string);
  
  }

  btn_voltar(): void {
    this.router.navigate(['/doador']);
  }

  mostraWhats() {
    this.service.buscarOng(this.caso.id_ong).subscribe(ong => 
      this.contato = ong
    );

    
  }

  mostraEmail() {

  }

  deslogar() {
    window.localStorage.removeItem("user");
    this.router.navigate(['/']);
  }
}
