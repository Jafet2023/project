import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/providers.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@ionic/storage';


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
  informacion: any;
  usu: any;

  
  constructor(private serviceProvider: ProvidersService,private autenticacion:AuthenticationService, private storage: Storage) {
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
    // this.storage.set('name', JSON.stringify(name));  
    let usu = this.autenticacion.getuser();
    // this.info = informacion;
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('port:', event.value);
  }

  PostReclamo(fRegistro: NgForm) {
    var idus = 0;
    this.storage.get('USER_INFO').then(res=>{
      idus = res.user_id;
      this.serviceProvider.PostReclamo(fRegistro.value.descripcion,fRegistro.value.fecha,fRegistro.value.empresa,idus)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
    }
    )
  }

}
// class empresasel{
//   public id: number;
//   public nombre: string;
// }
