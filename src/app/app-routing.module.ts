import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { LoginComponent } from './componentes/login/login.component';
import { OngCadastroComponent } from './componentes/ong-cadastro/ong-cadastro.component';
import { OngListagemComponent } from './componentes/ong-listagem/ong-listagem.component';
import { SenhaComponent } from './componentes/senha/senha.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'senha',
    component: SenhaComponent
  },
  {
    path: 'ong',
    component: OngListagemComponent
  },
  {
    path: 'ong/cadastro',
    component: OngCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
