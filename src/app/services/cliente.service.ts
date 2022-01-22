import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../clientes/cliente';
import { UsuarioApi } from '../clientes/usuario-api';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  getClientes(): Observable<UsuarioApi[]> {
    return this.http.get<UsuarioApi[]>(this.baseUrl);
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }
}
