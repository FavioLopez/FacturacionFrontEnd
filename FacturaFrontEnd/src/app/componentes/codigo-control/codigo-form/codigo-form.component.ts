import { Component, OnInit } from '@angular/core';
import {CodigoControlService} from '../../../servicios/codigo-control.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-codigo-form',
  templateUrl: './codigo-form.component.html',
  styles: [
  ]
})
export class CodigoFormComponent implements OnInit {

  constructor(public service: CodigoControlService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null){
      form.form.reset();
     }
    this.service.codigoControl = {
      NumAutorizacion: '',
      NumFactura: '',
      NitCi: '',
      FechaTran: '',
      MontoTran: '',
      LlaveDosi: ''
    };
  }
  Enviar(){
    this.service.GetCodigoControl().subscribe(
      res =>{
        this.resetForm();
      }
    )
  }
}
