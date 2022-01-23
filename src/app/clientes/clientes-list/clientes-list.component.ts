import { UsuarioApi } from './../usuario-api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = [];
  usuarios: UsuarioApi[] = [];

  constructor(
    private router: Router,
    private clientesService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clientesService.getClientes()
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

}
