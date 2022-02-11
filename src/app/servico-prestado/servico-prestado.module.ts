import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';


@NgModule({
  declarations: [
    ServicoPrestadoFormComponent,
    ServicoPrestadoListComponent
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule,
    RouterModule,
    ToastModule,
    MessageModule,
    ConfirmPopupModule,
    ButtonModule,
    DropdownModule
  ],
  exports: [
    ServicoPrestadoFormComponent,
    ServicoPrestadoListComponent
  ],
  providers: [ConfirmationService, MessageService]
})
export class ServicoPrestadoModule { }
