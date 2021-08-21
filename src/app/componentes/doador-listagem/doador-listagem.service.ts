import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { casos } from './casos';
import { doador } from '../shared/model/doador';


@Injectable({
  providedIn: 'root'
})
export class DoadorListagemService {

  doador: doador;

  constructor(private http: HttpClient) { }

  listarCasos() {
    return this.http.get<casos[]>('https://localhost:44335/api/caso');
  }

  getNomeDoador() {
    let retorno;

    retorno = this.http.get('https://localhost:44335/api/doador/' + window.localStorage.getItem('user'), { responseType: 'text' });

    console.log(retorno);

    return retorno;
  }

}
