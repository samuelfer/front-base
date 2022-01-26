import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesListComponent } from './clientes-list/clientes-list.component';

const routes: Routes = [
  { path: 'clientes/cadastro', component: ClientesFormComponent },
  { path: 'clientes/:id', component: ClientesFormComponent },
  { path: 'clientes', component: ClientesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
