import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { casos } from '../doador-listagem/casos';
import { OngListagemService } from '../ong-listagem/ong-listagem.service';
import { OngCadastroService } from './ong-cadastro.service';

@Component({
  selector: 'app-ong-cadastro',
  templateUrl: './ong-cadastro.component.html',
  styleUrls: ['./ong-cadastro.component.css']
})
export class OngCadastroComponent implements OnInit {

  url: any;
  imagem64: any;

  caso: any = {
    id_ong: null,
    id_doador: null,
    nome: null,
    valor: null,
    descricao: null,
    imagem: null
  };

  ong_id: number;

  constructor(private router: Router, private ongCadastroService: OngCadastroService,
    private ongListagemService: OngListagemService) { }

  ngOnInit(): void {
    if (window.localStorage.length < 1) {
      this.router.navigate(['/']);
    } else if (window.localStorage.getItem('user').split("@").length > 1) {
      this.router.navigate(['/doador']);
    }
  }

  btn_voltar(): void {
    this.router.navigate(['/ong']);
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
      //console.log(this.url);
      this.salvaImagem64(this.url);
      }
    }
  }

  async onSubmitCaso(caso) {

    await this.ongListagemService.getOngByLogin(window.localStorage.getItem('user')).then((retorno) => {
      this.ong_id = retorno.id;
    }).catch((error) => {
      //console.log(error.status)
    })

    this.caso.id_ong = this.ong_id
    this.caso.id_doador = null;
    this.caso.nome = caso.value.titulo;
    this.caso.valor = caso.value.valor;
    this.caso.descricao = caso.value.desc;
    this.caso.imagem = this.imagem64;

    //console.log(this.caso);

    await this.ongCadastroService.criaCaso(this.caso).then((retorno) => {

      this.router.navigate(['/ong']);

    }).catch((error) => {
      //console.log(error.status)
    })
  }

  salvaImagem64(imagem) {
    this.imagem64 = imagem
  }

  deslogar() {
    window.localStorage.removeItem("user");
    this.router.navigate(['/']);
  }

}
