import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig
} from "primeng/api";

import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes()
      .subscribe(response => {
        this.clientes = response
      });

  }

  abrirForm(): void {
    this.router.navigate(['clientes/cadastro']);
  }

  abrirEdicao(): void {
    this.router.navigate(['clientes/cadastro']);
  }

  deletar(cliente: Cliente): void {
    this.clienteService.deletar(cliente).subscribe(
      response => null,
      error => {
        this.messageService.add({severity:'error', summary: 'Erro',
      detail: 'Ocorreu um erro ao tentar excluir'});
      });
    this.ngOnInit();
  }

  confirm(cliente: Cliente) {
    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: 'Sim',
      rejectLabel:  'Não',
      message: `Deseja realmente excluir ${cliente.nome}?`,
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deletar(cliente);
        this.messageService.add({
          severity: "success",
          summary: "Atenção",
          detail: "Registro excluído com sucesso"
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "info",
          summary: "Atenção",
          detail: "Você cancelou a exclusão"
        });
      }
    });
  }

}
