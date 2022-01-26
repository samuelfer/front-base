import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Cliente } from '../cliente';
import { ClienteService } from './../../services/cliente.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss'],
  providers: [MessageService]
})
export class ClientesFormComponent implements OnInit {

  public cliente: Cliente = new Cliente(0, '', '', '');
  erros: String[] = [];
  id: number | undefined;
  submitted = false;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private messageService: MessageService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let params: Observable<Params>  =this.activedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
          this.clienteService.getClienteById(this.id)
            .subscribe(response => this.cliente = response,
                       errorResponse => console.log(errorResponse)
            )
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.id){
      this.clienteService.atualizar(this.cliente)
      .subscribe(response => {
        this.messageService.add({severity:'success', summary: 'Successo',
        detail: 'Registro atualizado com sucesso'});
        this.cliente = response
        this.erros = [];
      },
      errorResponse => {
        this.erros = errorResponse.error.errors;
        this.messageService.add({severity:'error', summary: 'Erro',
        detail: 'Ocorreu um erro ao tentar salvar'});
      });
    } else {
      this.clienteService.cadastrar(this.cliente)
      .subscribe(response => {
        this.messageService.add({severity:'success', summary: 'Successo',
        detail: 'Registro cadastrado com sucesso'});
        this.cliente = response
        this.erros = [];
        this.voltar();
      },
      errorResponse => {
        this.erros = errorResponse.error.errors;
        this.messageService.add({severity:'error', summary: 'Erro',
        detail: 'Ocorreu um erro ao tentar salvar'});
      });
    }
  }

  voltar(): void {
    this.router.navigate(['clientes']);
  }

}
