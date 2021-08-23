import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { casos } from '../doador-listagem/casos';
import { ong } from '../shared/model/ong';

@Injectable({
  providedIn: 'root'
})
export class DoadorDetalheService {

  

  constructor(private http: HttpClient) { }

  listarCasosPorId(id) {
    return this.http.get<casos>('https://localhost:44335/api/caso/' + id);
  }

  buscarOng(ong) {
    return this.http.get<ong>('https://localhost:44335/api/ong/' + ong);
  }
}
