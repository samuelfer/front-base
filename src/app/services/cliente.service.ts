import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';

import { Cliente } from '../clientes/cliente';
import { PostApi } from '../clientes/post-api';
import { UsuarioApi } from '../clientes/usuario-api';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_URL}/clientes`);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_URL}/clientes/${id}`)
  }

  cadastrar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_URL}/clientes`, cliente);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_URL}/clientes/${cliente.id}`, cliente);
  }
}
