import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  createDoador(doador) {
    console.log(doador);
    console.log("service");

    return this.http.post('https://localhost:44335/api/doador', doador);
  }

  createOng(ongEndereco) {
    console.log(ongEndereco);
    console.log("service");

    

    return this.http.post('https://localhost:44335/api/endereco', ongEndereco);
  }

  async test(ongEndereco) { 
    console.log(ongEndereco);
    console.log("service");

    var endereco = {
        cep: ongEndereco.cep,
        estado: ongEndereco.estado,
        cidade: ongEndereco.cidade,
        bairro: ongEndereco.bairro,
        rua: ongEndereco.rua,
        numero: 20,
        complemento: ongEndereco.complemento
    };

    console.log("endereco: " + endereco);

    var response = await this.http.post('https://localhost:44335/api/endereco', endereco).pipe(delay(100)).toPromise();

    console.log("response: " + response);

    var endereco2 = {
      login: ongEndereco.login,
      senha: ongEndereco.senha,
      nome: ongEndereco.nome,
      qtdAnimais: ongEndereco.qtdAnimais,
      celular: ongEndereco.celular,
      complemento: ongEndereco.email
    };

    var response2 = await this.http.post('https://localhost:44335/api/ong', endereco2).pipe(delay(100)).toPromise();


    return response;
  }
}
