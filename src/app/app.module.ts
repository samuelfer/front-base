import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { HomeComponent } from './home/home.component';
import { ClienteService } from './services/cliente.service';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    ClientesModule,
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
