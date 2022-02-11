import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { Cliente } from './../../clientes/cliente';
import { ClienteService } from './../../services/cliente.service';
import { ServicoPrestadoService } from './../../services/servico-prestado.service';
import { ServicoPrestado } from './../servico-prestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.scss']
})
export class ServicoPrestadoFormComponent implements OnInit {

  id: number | undefined;
  clientes: Cliente[] = [];
  servico: ServicoPrestado =  new ServicoPrestado();
  erros: String[] = [];
  submitted = false;

  constructor(
    private clienteService: ClienteService,
    private servicoPrestadoService: ServicoPrestadoService,
    private router: Router,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe(response => this.clientes = response);
  }

  onSubmit() {
    this.submitted = true;
    if (this.id){
      this.servicoPrestadoService.atualizar(this.servico)
      .subscribe(response => {
        this.messageService.add({severity:'success', summary: 'Successo',
        detail: 'Registro salvo com sucesso'});
        this.erros = [];
        this.voltar();
      },
      errorResponse => {
        this.erros = errorResponse.error.errors;
        this.messageService.add({severity:'error', summary: 'Erro',
        detail: 'Ocorreu um erro ao tentar salvar'});
      });
    } else {
      this.servicoPrestadoService.cadastrar(this.servico)
      .subscribe(response => {
        this.messageService.add({severity:'success', summary: 'Successo',
        detail: 'Registro salvo com sucesso'});
        this.servico = response
        this.erros = [];
        this.servico = new ServicoPrestado();
      },
      errorResponse => {
        this.erros = errorResponse.error.errors;
        this.messageService.add({severity:'error', summary: 'Erro',
        detail: 'Ocorreu um erro ao tentar salvar'});
      });
    }
  }

  voltar(): void {
    this.router.navigate(['servico-prestado-lista']);
  }

}
