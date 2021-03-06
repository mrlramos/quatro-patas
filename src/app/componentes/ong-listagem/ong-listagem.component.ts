import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { casos } from '../doador-listagem/casos';
import { OngListagemService } from './ong-listagem.service';

@Component({
  selector: 'app-ong-listagem',
  templateUrl: './ong-listagem.component.html',
  styleUrls: ['./ong-listagem.component.css']
})
export class OngListagemComponent implements OnInit {

  ongNome: string = "ONG";
  ong: any;
  casos: casos[];
  idOng: any;

  constructor(private router: Router, private ongService: OngListagemService) { }

  ngOnInit(): void {
    this.comecoPagina();
  }

  btn_criar_caso(): void {
    this.router.navigate(['/ong/cadastro']);
  }

  deslogar() {
    window.localStorage.removeItem("user");
    this.router.navigate(['/']);
  }

  async comecoPagina() {

    try {
      if (window.localStorage.length < 1) {
        this.router.navigate(['/']);
      } else if (window.localStorage.getItem('user').split("@").length > 1) {
        this.router.navigate(['/doador']);      
      } else {

        await this.ongService.getOngByLogin(window.localStorage.getItem('user')).then((retorno) => {

          this.ong = retorno;

          this.ongNome = this.ong.nome;

          this.ongService.getCasosPorOng(this.ong.id).then((retorno) => {
            
            this.casos = retorno;

          }).catch((error) => {
          })
        }).catch((error) => {
        })
        
      }
    } catch (error) {
    }
  }

  async onDelete(casoId) {    
    await this.ongService.deleteOng(casoId).then((retorno) => {
      this.ngOnInit();

    }).catch((error) => {
    })
  }
}
