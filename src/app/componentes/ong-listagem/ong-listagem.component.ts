import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ong-listagem',
  templateUrl: './ong-listagem.component.html',
  styleUrls: ['./ong-listagem.component.css']
})
export class OngListagemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btn_criar_caso(): void {
    this.router.navigate(['/ong/cadastro']);
  }

}
