import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doador-detalhe',
  templateUrl: './doador-detalhe.component.html',
  styleUrls: ['./doador-detalhe.component.css']
})
export class DoadorDetalheComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btn_voltar(): void {
    this.router.navigate(['/doador']);
  }
}
