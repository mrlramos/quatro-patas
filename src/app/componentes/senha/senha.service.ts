import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {

  constructor(private http: HttpClient) { }

  busca(email) {

    var rota = 'https://localhost:44335/api/doador/' + email;
    var retorno = this.http.get(rota);

    console.log("Chamando API para buscar e-mail!");

    return retorno;
  }
}