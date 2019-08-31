import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/providers.service';
import { IonicSelectableComponent } from 'ionic-selectable';


@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.page.html',
  styleUrls: ['./reclamo.page.scss'],
})

export class ReclamoPage implements OnInit {
  Empresas: any[];
  // Empresa: empresasel;
  empresas : any;
  
  Reclamos: any[];
  reclamos: any;
  item: { _id: any; nombre: any; };
  // item: empresasel;

  
  constructor(private serviceProvider: ProvidersService) {
    this.Empresas = [];
  }

  ngOnInit() {
    this.serviceProvider.getEmpresas().then( data => {
      this.empresas = data;
      console.log(this.empresas);
      for(let i=0;i<this.empresas.length;i++){
          this.item = {
              _id: this.empresas[i]._id,
              nombre: this.empresas[i].nombre
          };
        this.Empresas.push(this.item);
      }
    });
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('port:', event.value);
  }

  PostReclamo(fRegistro: NgForm) {
    this.serviceProvider.PostReclamo(fRegistro.value.descripcion,fRegistro.value.fecha,fRegistro.value.empresa)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

}
// class empresasel{
//   public id: number;
//   public nombre: string;
// }
