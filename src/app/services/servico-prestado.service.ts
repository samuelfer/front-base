import { ServicoPrestado } from './../servico-prestado/servico-prestado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase+'/servicos-prestados';

  constructor(private http: HttpClient) { }

  getServicosPrestado(): Observable<ServicoPrestado[]> {
    return this.http.get<ServicoPrestado[]>(`${this.apiURL}`);
  }

  cadastrar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(`${this.apiURL}`, servicoPrestado);
  }

  atualizar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.put<ServicoPrestado>(`${this.apiURL}/${servicoPrestado.id}`, servicoPrestado);
  }

  deletar(servicoPrestado: ServicoPrestado): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${servicoPrestado.id}`);
  }
}
