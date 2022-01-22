import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  public cliente: Cliente = new Cliente(0, '', '', '');

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.cliente)
  }

  voltar(): void {
    this.router.navigate(['clientes']);
  }

}
