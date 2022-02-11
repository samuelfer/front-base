import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'servico-prestado-form', component: ServicoPrestadoFormComponent },
  { path: 'servico-prestado-lista', component: ServicoPrestadoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
