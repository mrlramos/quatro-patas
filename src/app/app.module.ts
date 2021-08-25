import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './componentes/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { SenhaComponent } from './componentes/senha/senha.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { OngListagemComponent } from './componentes/ong-listagem/ong-listagem.component';
import { OngCadastroComponent } from './componentes/ong-cadastro/ong-cadastro.component';
import { DoadorListagemComponent } from './componentes/doador-listagem/doador-listagem.component';
import { DoadorDetalheComponent } from './componentes/doador-detalhe/doador-detalhe.component';


import { CadastroService } from './componentes/cadastro/cadastro.service';
import { SenhaService } from './componentes/senha/senha.service';
import { LoginService } from './componentes/login/login.service';
import { DoadorListagemService } from './componentes/doador-listagem/doador-listagem.service';
import { DoadorDetalheService } from './componentes/doador-detalhe/doador-detalhe.service';
import { OngListagemService } from './componentes/ong-listagem/ong-listagem.service';
import { OngCadastroService } from './componentes/ong-cadastro/ong-cadastro.service';



import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DoadorDetalhePipe } from './componentes/doador-detalhe/doador-detalhe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    SenhaComponent,
    FooterComponent,
    HeaderComponent,
    OngListagemComponent,
    OngCadastroComponent,
    DoadorListagemComponent,
    DoadorDetalheComponent,
    DoadorDetalhePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CadastroService,
    SenhaService,
    LoginService,
    DoadorListagemService,
    DoadorDetalheService,
    OngListagemService,
    OngCadastroService,
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
