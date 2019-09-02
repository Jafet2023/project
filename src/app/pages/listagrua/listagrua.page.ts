import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';
import { NavController } from '@ionic/angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-listagrua',
  templateUrl: './listagrua.page.html',
  styleUrls: ['./listagrua.page.scss'],
})
export class ListagruaPage implements OnInit {

  lat:number;
  lon:number;
  total:number;
  item: { _id: any; distancia: any; };
  distancias:any[];
  latMadrid:any;
  lonMadrid:any;

  empresas: any;

  constructor(private serviceProvider: ProvidersService, public navCtrl: NavController, public geolocation:Geolocation) {
    this.distancias = [];
   }

  ngOnInit() {
    this.getEmpresa();
    // this.serviceProvider.getGrua().then(data => {
    //   this.empresas = data;
    //   console.log(this.empresas);
    // })
  }

  getGeolocation(latemp,lonemp,idempresa){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;
      // almacenar todos los resultados en un objeto y despues que los mande al html
      var t = this.calculateDistance(this.lon, lonemp, this.lat, latemp);
      this.item = {
        _id: idempresa,
        distancia: t
      };
      this.distancias.push(this.item);  
    });
  }

  calculateDistance(lon1, lon2, lat1, lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return Math.round(dis * 100) / 100;
  }

  getEmpresa(){
    this.serviceProvider.getGrua().then(data => {
      this.empresas = data;
      for(var i=0;i<this.empresas.length;i++){
        this.latMadrid = this.empresas[i].latitud;
        this.lonMadrid = this.empresas[i].longitud;
        this.getGeolocation(this.latMadrid,this.lonMadrid,this.empresas[i].id);
      }
      console.log(this.empresas);
      console.log(this.distancias);
    });
  }

}
