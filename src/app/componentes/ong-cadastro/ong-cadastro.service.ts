import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OngCadastroService {

  constructor(private http: HttpClient) { }

  criaCaso(caso) {

    console.log("CASO:");
    console.log(caso);
    var retorno = this.http.post('https://localhost:44335/api/caso', caso).pipe(delay(100)).toPromise();

    console.log("Retorno:");
    console.log(retorno);

    return retorno;
  }
}
