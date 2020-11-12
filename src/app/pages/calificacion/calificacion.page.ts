import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/providers.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.page.html',
  styleUrls: ['./calificacion.page.scss'],
})
export class CalificacionPage implements OnInit {

  Empresas: any[];
  // Empresa: empresasel;
  empresas : any;
  
  Reclamos: any[];
  reclamos: any;
  item: { _id: any; nombre: any; };

  constructor(private serviceProvider: ProvidersService,
              private storage: Storage) { 
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

  PostCalificacion(fRegistro: NgForm) {
    var idus = 0;
    this.storage.get('USER_INFO').then(res=>{
      console.log(res);
      idus = res.user_id;
      this.serviceProvider.PostCalificacion(fRegistro.value.descripcion,fRegistro.value.empresa,fRegistro.value.fecha,idus)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
    });
    
  }

}
