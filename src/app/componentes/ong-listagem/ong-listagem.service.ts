import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { casos } from '../doador-listagem/casos';

@Injectable({
  providedIn: 'root'
})
export class OngListagemService {

  constructor(private http: HttpClient) { }

  getIdOng() {
    let retorno;

    retorno = this.http.get('https://localhost:44335/api/ong/id/' + window.localStorage.getItem('user'), { responseType: 'text' });

    console.log(retorno);

    return retorno;
  }

  getNomeOng() {
    let retorno;

    retorno = this.http.get('https://localhost:44335/api/ong/nome/' + window.localStorage.getItem('user'), { responseType: 'text' });

    console.log(retorno);

    return retorno;
  }

  getCasosPorOng(idOng) {
    let retorno;

    retorno = this.http.get<casos>('https://localhost:44335/api/caso/ong/' + idOng);

    console.log(retorno);

    return retorno;
  }

}
