import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ong-cadastro',
  templateUrl: './ong-cadastro.component.html',
  styleUrls: ['./ong-cadastro.component.css']
})
export class OngCadastroComponent implements OnInit {

  url: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btn_voltar(): void {
    this.router.navigate(['/ong']);
  }

    onSelectFile(event) { // called each time file input changes
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]); // read file as data url

          reader.onload = (event) => { // called once readAsDataURL is completed
            this.url = event.target.result;
            console.log(this.url);
          }
        }
    }
}
