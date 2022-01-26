import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';

import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesRoutingModule } from './clientes-routing.module';

@NgModule({
  declarations: [
    ClientesFormComponent,
    ClientesListComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ToastModule,
    MessageModule,

  ],
  exports: [
    ClientesFormComponent
  ]
})
export class ClientesModule { }
