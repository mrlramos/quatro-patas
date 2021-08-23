import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { ong } from '../shared/model/ong';
import { camposInvalidos } from '../shared/model/camposInvalidos';
import { endereco } from '../shared/model/endereco';
import { CadastroService } from './cadastro.service';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tipoUsuario: string;

  //CadastroDoador
  camposInvalidos: Array<camposInvalidos> = [];
  camposInvalidosTela: Array<camposInvalidos> = [];
  doadorCriado = false;
  emailExiste = false;

  //CadastroOng
  loginExiste = false;
  ongCriada = false;
  camposInvalidosOng: Array<camposInvalidos> = [];
  camposInvalidosTelaOng: Array<camposInvalidos> = [];
  retornoLoginOng: any;
  //Cadastro de endereço dentro de ONG
  enderecoOng = {
    cep: null,
    estado: null,
    cidade: null,
    bairro: null,
    rua: null,
    numero: null,
    complemento: null
  };
  ong = {
    id_endereco: null,
    login: null,
    senha: null,
    nome: null,
    qtd_animais: null,
    celular: null,
    email: null
  };

  constructor(private router: Router, private cadastroService: CadastroService) {
  }

  ngOnInit(): void {}

  usuario(tipoUsuario): void {
    if (tipoUsuario == 'doador') {
      this.tipoUsuario = 'doador';
    } else 
      this.tipoUsuario = 'ong';
  }

  btnVoltar(): void {
    this.router.navigate(['/']);
  }

  async onSubmitDoador(form) {

    this.emailExiste = false;
    this.doadorCriado = false;
    
    if (this.validaCamposDoador(form)) {

      await this.cadastroService.createDoador(form.value).then((retorno) => {
  
        this.doadorCriado = true;
        form.reset();
        
      }).catch((error: HttpErrorResponse) => {
        console.log(error);
  
        if (error.error == "Login existente") {
          this.loginExiste = true;
        }   
        
      })
    }
  }

  validaCamposDoador(form): boolean {

    for (let i = 0; i < this.camposInvalidosTela.length; i++) {
      this.camposInvalidosTela[i].mensagem = null;
    }
    this.camposInvalidosTela.length = 0;

    

    var patternNome = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");
    var patternCpf = new RegExp("[0-9]{11}");
    var patternCelular = new RegExp("[0-9]{11}");
    let patternNascimento = form.value.data_nascimento;
    var patternCidade = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var patternEmail = new RegExp(regex);
    form.value.email = form.value.email.toLowerCase();

    
    if (!patternNome.test(form.value.nome)) {
      this.camposInvalidos.push({mensagem: "Nome inválido, utilize apenas letras e o espaço! Exemplo: João Guilherme"});
    } 
    if (!patternCpf.test(form.value.cpf)) {
      this.camposInvalidos.push({mensagem: "CPF inválido, utilize apenas números e preencha os 11 dígitos! Exemplo: 04454154787"});
    }
    if (!patternCelular.test(form.value.celular)) {
      this.camposInvalidos.push({mensagem: "Celular inválido, utilize apenas números e preencha os 11 dígitos! Exemplo: 67981457244"});
    }

    //Fazer posteriormente função que retorne data atual e que faça a validação correta
    let anoInserido: number;
    let mesInserido: number;
    let diaInserido: number;

    anoInserido = +patternNascimento.substring(0, 4);    
    mesInserido = +patternNascimento.substring(5, 7);    
    diaInserido = +patternNascimento.substring(8, 10);     
    
    var today = new Date();
    var dd = +String(today.getDate()).padStart(2, '0');
    var mm = +String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var ano = +today.getFullYear();    
    
    if ((anoInserido > ano) || ((anoInserido <= ano) && (mesInserido > mm)) || 
    ((anoInserido <= ano) && (mesInserido <= mm) && (diaInserido > dd)) ) {
      this.camposInvalidos.push({mensagem: "Data inválida, insira uma data anterior a data atual!"});
    } else if (patternNascimento === '') {
      this.camposInvalidos.push({mensagem: "Data inválida, campo vazio!"});
    }

    if (!patternCidade.test(form.value.cidade)) {
      this.camposInvalidos.push({mensagem: "Cidade inválida, utilize apenas letras e o espaço! Exemplo: Três Lagoas"});
    } 

    if (!patternEmail.test(form.value.email)) {
      this.camposInvalidos.push({mensagem: "E-mail inválido!"});
    } 

    if (this.camposInvalidos.length == 0) {
      return true;
    } else {

      for (let i = 0; i < this.camposInvalidos.length; i++) {
        this.camposInvalidosTela.push({mensagem: this.camposInvalidos[i].mensagem});
      }
  
      for (let i = 0; i < this.camposInvalidos.length; i++) {
        this.camposInvalidos[i].mensagem = null;
      }
      this.camposInvalidos.length = 0;
  
      return false;
    }            
  }

  onSubmitOng(form) {

    try {
      this.loginExiste = false;
      this.ongCriada = false;
    
    if (this.validaCamposOng(form)) {

      
    }

    } catch (erro) {
      console.log(erro);
    }

    
  }

  validaCamposOng(form): boolean {

    for (let i = 0; i < this.camposInvalidosTelaOng.length; i++) {
      this.camposInvalidosTelaOng[i].mensagem = null;
    }
    this.camposInvalidosTelaOng.length = 0;

    

    let patternNome = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");
    let patternQtdAnimais = new RegExp("[0-9]");
    let patternCep = new RegExp("[0-9]{8}");
    let patternCidade = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");
    let patternEstado = new RegExp("[a-zA-Z]{2}");
    let patternBairro = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");
    let patternRua = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");
    let patternNumero = new RegExp("[0-9]+$");
    let patternComplemento = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]+$");
    let patternCelular = new RegExp("[0-9]{11}"); 
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var patternEmail = new RegExp(regex);
    form.value.email = form.value.email.toLowerCase();
    let patternLogin = new RegExp("^[a-zA-Z0-9]+$"); 

    
    if (!patternNome.test(form.value.nome)) {
      this.camposInvalidosOng.push({mensagem: "Nome inválido, utilize apenas letras e o espaço. Exemplo: João Guilherme"});
    } 
    if (!patternQtdAnimais.test(form.value.qtd_animais)) {
      this.camposInvalidosOng.push({mensagem: "Quantidade de animais inválida, insira apenas números."});
    }
    if (!patternCep.test(form.value.cep)) {
      this.camposInvalidosOng.push({mensagem: "CEP inválido, insira apenas números. Exemplo: 86000000"});
    }
    if (!patternEstado.test(form.value.estado)) {
      this.camposInvalidosOng.push({mensagem: "Estado inválido, insira apenas a sigla. Exemplo: SP"});
    }
    if (!patternCidade.test(form.value.cidade)) {
      this.camposInvalidosOng.push({mensagem: "Cidade inválida, insira apenas letras. Exemplo: São Paulo"});
    }
    if (!patternBairro.test(form.value.bairro)) {
      this.camposInvalidosOng.push({mensagem: "Bairro inválido, insira apenas letras. Exemplo: Jardim Paulista"});
    }
    if (!patternRua.test(form.value.rua)) {
      this.camposInvalidosOng.push({mensagem: "Rua inválida, insira apenas letras. Exemplo: Agenor Pedrosa"});
    }
    if (!patternNumero.test(form.value.numero)) {
      this.camposInvalidosOng.push({mensagem: "Número inválido, insira apenas números. Exemplo: 714"});
    }
    if (!patternComplemento.test(form.value.complemento)) {
      this.camposInvalidosOng.push({mensagem: "Complemento inválido, insira apenas letras e números. Exemplo: Apto 14"});
    }
    if (!patternCelular.test(form.value.celular)) {
      this.camposInvalidosOng.push({mensagem: "Celular inválido, insira apenas números. Exemplo: 67981457244"});
    }   
    if (!patternEmail.test(form.value.email)) {
      this.camposInvalidosOng.push({mensagem: "E-mail inválido. Exemplo: joaozinho@outlook.com"});
    } 
    if (!patternLogin.test(form.value.login)) {
      this.camposInvalidosOng.push({mensagem: "Login inválido, insira apenas letras e números. Exemplo: dudu18051965"});
    }

    console.log(this.camposInvalidosOng.length);
    
    if (this.camposInvalidosOng.length == 0) {

      if (this.loginExisteMethod(form)) {
        return true;
      } 

    } else {

      for (let i = 0; i < this.camposInvalidosOng.length; i++) {
        this.camposInvalidosTelaOng.push({mensagem: this.camposInvalidosOng[i].mensagem});
        console.log(this.camposInvalidosOng[i].mensagem);
        
      }
  
      for (let i = 0; i < this.camposInvalidosOng.length; i++) {
        this.camposInvalidosOng[i].mensagem = null;
      }
      this.camposInvalidosOng.length = 0;
  
      return false;
    }            
  }

  async loginExisteMethod(form) {
     await this.cadastroService.loginJaExiste(form.value.login).then((retorno) => {
      console.log(retorno);

      this.enderecoOng.cep = form.value.cep;
      this.enderecoOng.estado = form.value.estado;
      this.enderecoOng.cidade = form.value.cidade;
      this.enderecoOng.bairro = form.value.bairro;
      this.enderecoOng.rua = form.value.rua;
      this.enderecoOng.numero = +form.value.numero;
      this.enderecoOng.complemento = form.value.complemento;

      console.log(this.enderecoOng);
      

      this.cadastroService.createEndereco(this.enderecoOng).then((retorno) => {
        
        console.log(retorno);
        
        this.ong.id_endereco = +retorno;
        this.ong.login = form.value.login;
        this.ong.senha = form.value.senha;
        this.ong.nome = form.value.nome;
        this.ong.qtd_animais = +form.value.qtd_animais;
        this.ong.celular = form.value.celular;
        this.ong.email = form.value.email;



        this.cadastroService.createOng(this.ong).then((retorno) => {
          console.log(retorno);
          
          form.reset();
          this.ongCriada = true;
        }).catch((error: HttpErrorResponse) => {
          console.log(error);         
        })

      }).catch((error: HttpErrorResponse) => {
        console.log(error);
      })

      return true;
      
    }).catch((error: HttpErrorResponse) => {
      console.log(error);
      if (error.error == "Login existente") {
        this.loginExiste = true;
      }   

      console.log("retornou no error");
      return false;

    })    
  }
}