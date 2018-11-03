import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent  {

   parametro: Object = {
     cantidadMinimaCaracteres: 3
   };

   usuario: Object = {
    nombre: null,
    apellido: null,
    email: null
  };

  constructor() { }

  guardar( forma: NgForm) {
    console.log('Formulario Posteado');
    console.log(forma);
    console.log('Valor Forma', forma.value);
    console.log('Usuario', this.usuario);


  }


}
