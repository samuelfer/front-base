import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../clientes/cliente';
import { PostApi } from '../clientes/post-api';
import { UsuarioApi } from '../clientes/usuario-api';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  getClientes(): Observable<UsuarioApi[]> {
    return this.http.get<UsuarioApi[]>(`${this.baseUrl}/users`);
  }

  salvar(postApi: PostApi): Observable<PostApi> {
    return this.http.post<PostApi>(`${this.baseUrl}/posts`, postApi);
  }
}
