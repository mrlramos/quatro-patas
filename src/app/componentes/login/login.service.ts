import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async login(dados) {
    console.log("dados: " + dados);

    var response = await this.http.post('https://localhost:44335/api/login', dados).pipe(delay(100)).toPromise();

    console.log("response: " + response);
  }
}
