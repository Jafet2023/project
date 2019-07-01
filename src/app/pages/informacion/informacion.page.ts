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

  //empresas: any;
  // empresa = {"nombre": '', "nit": '', "direccion": '', "telefono": '', "correo": ''};
  information: any;

  // empresas: ProductEmpresa;
  isLoading = true;

  constructor(private serviceProvider: ProvidersService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id =this.route.snapshot.paramMap.get('id');
    this.serviceProvider.getDetails(id).subscribe(result => {
      console.log('details:', result);
      this.information = result;
    });

    // this.route.params.subscribe(
    //   params => {
    //     const id = params['id'];
    //     this.getEmpresa(id);
    //   }
    // );   
  }

  // getEmpresa(id) {
  //   const empresaSubs = this.serviceProvider.getDetails(id).subscribe(
  //     empresas => {
  //       this.empresas = empresas;

  //       console.log(this.empresas);

  //       if (!this.empresas) {
  //         alert('Server Error')
  //       } else {
  //         this.isLoading = false;
  //       }
  //     }, () => {},
  //     () => { if (empresaSubs) { empresaSubs.unsubscribe() } }
  //   );
  // }

  /* openWebsite(){
    window.open(this.information.Website,`_blank`);
  } */
  
}

// this.serviceProvider.getProductById(ProductEmpresa.number).then(data => {
//   this.empresas = data;
//   console.log(this.empresas);
// })