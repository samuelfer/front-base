import { PostApi } from './../post-api';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MessageService, PrimeNGConfig} from 'primeng/api';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss'],
  providers: [MessageService]
})
export class ClientesFormComponent implements OnInit {

  public cliente: Cliente = new Cliente(0, '', '', '');
  public postApi: PostApi = new PostApi(1, '', '');

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
    this.clienteService.salvar(this.postApi)
      .subscribe(response => {
        console.log('No sucesso ', response)
        this.messageService.add({severity:'success', summary: 'Successo', detail: 'Registro cadastrado com sucesso'});
      },
      errorResponse => {
        console.log(errorResponse)
      });
  }

  voltar(): void {
    this.router.navigate(['clientes']);
  }

}
