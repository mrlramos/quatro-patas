import { Component, Input, OnInit, Pipe, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { casos } from '../doador-listagem/casos';
import { DoadorDetalheService } from './doador-detalhe.service';
import { ong } from '../shared/model/ong';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DoadorListagemService } from '../doador-listagem/doador-listagem.service';

@Component({
  selector: 'app-doador-detalhe',
  templateUrl: './doador-detalhe.component.html',
  styleUrls: ['./doador-detalhe.component.css']
})
export class DoadorDetalheComponent implements OnInit {

  doador: any;

  //Modal
  whatsappModalRef: BsModalRef;
  @ViewChild('whatsapp') whatsapp;

  emailModalRef: BsModalRef;
  @ViewChild('email') email;

  config = {
    animated: true
  };

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
    private modalService: BsModalService,
    private doadorListagemService: DoadorListagemService) { }

  ngOnInit(): void {
    if (window.localStorage.length < 1) {
      this.router.navigate(['/']);
    } else if (window.localStorage.getItem('user').split("@").length == 1) {
      this.router.navigate(['/ong']);
    }

    this.doadorListagemService.getNomeDoador().subscribe(doador => this.doador = doador);
    
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
    

    this.whatsappModalRef = this.modalService.show(this.whatsapp, this.config)
  }



  mostraEmail() {
    this.service.buscarOng(this.caso.id_ong).subscribe(ong => 
      this.contato = ong
    );

    this.emailModalRef = this.modalService.show(this.email, this.config)
  }

  deslogar() {
    window.localStorage.removeItem("user");
    this.router.navigate(['/']);
  }
}
