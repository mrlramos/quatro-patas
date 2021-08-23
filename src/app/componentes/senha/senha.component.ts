import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { email } from '../shared/model/email';
import { SenhaService } from './senha.service';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  emailEncontrado = false;
  emailEnviado = false;
  emailNaoEncontrado = false;
  email: string;
  retorno: email;
  emailIncorreto = false; 


  constructor(private router: Router, private senhaService: SenhaService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email : []
    });
  }

  btn_voltar(): void {
    this.router.navigate(['/']);
  }

  async enviarRecuperacaoSenha() {

    this.emailEnviado = false;
    this.emailIncorreto = false;

    try {

      this.submitted = true;
      this.email = this.form.value.email;

      var teste = await this.senhaService.busca(this.email).then((message) => {

        console.log('message: ' + message);
        this.emailEnviado = true;
        this.emailIncorreto = false;
        this.form.reset();

      }).catch((error) => {

        this.emailEnviado = false;
        this.emailIncorreto = true;
        console.log(error.status)
        this.form.reset();
      })

      console.log(teste);

      this.form.reset();
      
    } catch (error) {
      console.log(error);
    }
  
  }

  temErro(campo: string) {
    return this.form.get(campo).errors;
  }
}
