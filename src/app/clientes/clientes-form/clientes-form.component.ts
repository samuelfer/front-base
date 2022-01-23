import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';

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

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    this.clienteService.salvar(this.cliente)
      .subscribe(response => {
        this.messageService.add({severity:'success', summary: 'Successo', detail: 'Registro cadastrado com sucesso'});
        this.cliente = response;
        this.erros = [];
      },
      errorResponse => {
        this.erros = errorResponse.error.errors;
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar salvar'});
      });
  }

  voltar(): void {
    this.router.navigate(['clientes']);
  }

}
