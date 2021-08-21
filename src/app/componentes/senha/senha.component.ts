import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
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


  constructor(private router: Router, private senhaService: SenhaService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email : []
    });
  }

  btn_voltar(): void {
    this.router.navigate(['/']);
  }

  enviarRecuperacaoSenha(): any {
    this.submitted = true;
    this.email = this.form.value.email;

    this.senhaService.busca(this.email).subscribe(
      (res: any) => {
      },
      error => console.log(error),
      () => console.log("OK"),
    );

    this.emailEnviado = true;
    this.form.reset();
  }

  temErro(campo: string) {
    return this.form.get(campo).errors;
  }
}
