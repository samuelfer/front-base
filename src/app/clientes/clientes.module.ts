import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ConfirmPopupModule } from 'primeng/confirmpopup';


import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

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
    ConfirmPopupModule,
    ButtonModule
  ],
  exports: [
    ClientesFormComponent
  ],
  providers: [ConfirmationService, MessageService]
})
export class ClientesModule { }
