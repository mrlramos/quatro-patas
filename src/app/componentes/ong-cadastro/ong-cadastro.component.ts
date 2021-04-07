import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ong-cadastro',
  templateUrl: './ong-cadastro.component.html',
  styleUrls: ['./ong-cadastro.component.css']
})
export class OngCadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btn_voltar(): void {
    this.router.navigate(['/ong']);
  }

}
