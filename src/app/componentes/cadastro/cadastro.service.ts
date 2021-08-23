import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  //DOADOR
  createDoador(doador) {
    console.log(doador);
    console.log("service doador");

    return this.http.post('https://localhost:44335/api/doador', doador, { responseType: 'text' }).pipe(delay(100)).toPromise();
  }


  //ONG
  loginJaExiste(login) {
    console.log(login);
    console.log("service login");

    return this.http.get('https://localhost:44335/api/ong/' + login).pipe(delay(100)).toPromise();;
  }

  createEndereco(endereco) {
    console.log(endereco);
    console.log("service endereco");

    return this.http.post('https://localhost:44335/api/endereco', endereco, { responseType: 'text' }).pipe(delay(100)).toPromise();
  }

  createOng(ong) {
    console.log(ong);
    console.log("service ong");

    return this.http.post('https://localhost:44335/api/ong', ong, { responseType: 'text' }).pipe(delay(100)).toPromise();
  }

  
}
