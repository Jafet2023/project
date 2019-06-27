import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvidersService } from '../../providers.service';
import { ProductEmpresa } from 'src/app/empresa';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  empresas: any;
  // empresa = {"nombre": '', "nit": '', "direccion": '', "telefono": '', "correo": ''};
  information=null;

  constructor(private serviceProvider: ProvidersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id =this.activatedRoute.snapshot.paramMap.get('id');
    this.serviceProvider.getDetails(id).subscribe(result => {
      console.log('informacion:', result);
      this.information = result;
    });
  }

  openWebsite(){
    window.open(this.information.Website,`_blank`);
  }
  
}

// this.serviceProvider.getProductById(ProductEmpresa.number).then(data => {
//   this.empresas = data;
//   console.log(this.empresas);
// })