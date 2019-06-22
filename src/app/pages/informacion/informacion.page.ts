import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';
import { ProductEmpresa } from 'src/app/empresa';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  empresas: any;
  empresa = {"nombre": '', "nit": '', "direccion": '', "telefono": '', "correo": ''};
  ngForm: any;

  constructor(private serviceProvider: ProvidersService) { }

  ngOnInit() {
    this.serviceProvider.getEmpresas().then(data => {
      this.empresas = data;
      console.log(this.empresas);
    });
  }

  saveEmpresas() {
    this.serviceProvider.addEmpresas(this.empresa).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  doSignup() {
    this.serviceProvider.register(this.ngForm).then((result)=> 
    //this.serviceProvider.register(this.empresa).then((result) => 
    {
     console.log(result)
     }, (err) => {
      console.log(err)

    });
  }
}
