import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FabricantesComponent } from './fabricantes/fabricantes.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutoComponent } from './produto/produto.component';
import { EntradasComponent } from './entradas/entradas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoriasComponent,
    FabricantesComponent,
    FornecedoresComponent,
    ClientesComponent,
    ProdutoComponent,
    EntradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    TabViewModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    InputSwitchModule,
    CalendarModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
