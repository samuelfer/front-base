import { ServicoPrestadoService } from './../../services/servico-prestado.service';
import { ServicoPrestadoBusca } from './servico-prestado-busca';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.scss']
})
export class ServicoPrestadoListComponent implements OnInit {

  nome: string;
  mes: number;
  meses: any[];
  lista: ServicoPrestadoBusca[];
  message: string;

  constructor(
    private router: Router,
    private servicoPrestadoService: ServicoPrestadoService
  ) {
    this.meses = [
      {value: 1, label: 'Janeiro'},
      {value: 2, label: 'Fevereiro'},
      {value: 3, label: 'Março'},
      {value: 4, label: 'Abril'},
      {value: 5, label: 'Maio'},
      {value: 6, label: 'Junho'},
      {value: 7, label: 'Julho'},
      {value: 8, label: 'Agosto'},
      {value: 9, label: 'Setembro'},
      {value: 10, label: 'Outubro'},
      {value: 11, label: 'Novembro'},
      {value: 12, label: 'Dezembro'}
    ];
  }

  ngOnInit(): void {
  }

  consultar() {
    this.servicoPrestadoService.buscar(this.nome, this.mes)
    .subscribe(response => {
      this.lista = response;
      if (this.lista.length < 1) {
        this.message = 'Nenhum registro encontrado';
      }
    });
  }

  abrirForm(): void {
    this.router.navigate(['servico-prestado-form']);
  }

}
