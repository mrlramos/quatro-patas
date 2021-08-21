import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { casos } from './casos';


@Injectable({
  providedIn: 'root'
})
export class DoadorListagemService {

  

  constructor(private http: HttpClient) { }

  listarCasos() {
    return this.http.get<casos[]>('https://localhost:44335/api/caso');
  }
}
