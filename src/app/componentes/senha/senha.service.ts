import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {

  constructor(private http: HttpClient) { }

  // busca(emailSenha: any) {
  //   var rota = 'https://localhost:44335/api/doador/email/' + emailSenha;
  //   var retorno = this.http.get(rota);

  //   return retorno;
  // }

  async login(dados): Promise<any> {
    let tipoUsuario;
    let retorno;

    retorno = await this.http.post('https://localhost:44335/api/login', dados).pipe(delay(100)).toPromise();

    if (retorno == 1) {
      window.localStorage.setItem('user', dados.login);
      tipoUsuario = "doador";
    } else if (retorno == 2) {
      window.localStorage.setItem('user', dados.login);
      tipoUsuario = "ong";
    } else {
      tipoUsuario = "n/a";
    }

    console.log('tipo usuario:' + tipoUsuario);
    console.log('retorno:' + retorno);

    return retorno;
  }

   busca(emailSenha: any): Promise<any> {

        var rota = 'https://localhost:44335/api/doador/email/' + emailSenha;
        var retorno =  this.http.get(rota).pipe(delay(100)).toPromise();;


    return retorno
  }
}


// var rota = 'https://localhost:44335/api/doador/email/' + emailSenha;
    // var retorno = this.http.get<email>(rota);

    // console.log("Chamando API para buscar e-mail!");
    // console.log(retorno);

    // return retorno;