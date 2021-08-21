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

  ong: string;
  casos: casos[]
  idOng: any;

  constructor(private router: Router, private ongService: OngListagemService) { }

  ngOnInit(): void {
    if (window.localStorage.length < 1) {
      this.router.navigate(['/']);
    } else {
      this.ongService.getIdOng().subscribe(casos => this.idOng = casos);
      this.ongService.getNomeOng().subscribe(casos => this.ong = casos);
      this.ongService.getCasosPorOng(this.idOng).subscribe(casos => this.casos = casos);
    }
  }

  btn_criar_caso(): void {
    this.router.navigate(['/ong/cadastro']);
  }

  deslogar() {
    window.localStorage.removeItem("user");
    this.router.navigate(['/']);
  }
}
