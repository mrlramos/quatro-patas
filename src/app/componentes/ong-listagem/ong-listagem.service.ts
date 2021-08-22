import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ong } from '../doador-detalhe/ong';
import { casos } from '../doador-listagem/casos';

@Injectable({
  providedIn: 'root'
})
export class OngListagemService {

  constructor(private http: HttpClient) { }

  getOngByLogin(login: string): Promise<ong> {
    var retorno;

    retorno = this.http.get<ong>('https://localhost:44335/api/ong/nome/' + login).pipe(delay(100)).toPromise();

    console.log(retorno);

    return retorno;
  }

  // getIdOng() {
  //   let retorno;

  //   retorno = this.http.get('https://localhost:44335/api/ong/id/' + window.localStorage.getItem('user'), { responseType: 'text' });

  //   console.log(retorno);

  //   return retorno;
  // }

  // getNomeOng() {
  //   let retorno;

  //   retorno = this.http.get('https://localhost:44335/api/ong/nome/' + window.localStorage.getItem('user'), { responseType: 'text' });

  //   console.log(retorno);

  //   return retorno;
  // }

  getCasosPorOng(idOng): Promise<casos[]> {
    let retorno;

    retorno = this.http.get<casos[]>('https://localhost:44335/api/caso/ong/' + idOng).pipe(delay(100)).toPromise();

    console.log(retorno);

    return retorno;
  }

}
