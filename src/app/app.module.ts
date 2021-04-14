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
    DoadorDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
