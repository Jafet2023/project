import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';
import { NavController } from '@ionic/angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-listagomeria',
  templateUrl: './listagomeria.page.html',
  styleUrls: ['./listagomeria.page.scss'],
})
export class ListagomeriaPage implements OnInit {

  lat:number;
  lon:number;
  total:number;
  distancias:Array<number> = [];
  latMadrid:any;
  lonMadrid:any;

  // empresas: Array<object> = [];
  empresas: any;

  constructor(private serviceProvider: ProvidersService, public navCtrl: NavController, public geolocation:Geolocation) {
    // this.distancias = [];
    //this.getEmpresa();
    //this.getGeolocation();
  }

  ngOnInit() {
   this.getEmpresa();
  }

  getGeolocation(latemp,lonemp){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;
      console.log(latemp);
      console.log(lonemp);
      //let latMadrid = -17.770637;
      // -17.770637, -63.175327
      //let lonMadrid = -63.175327;

      // let dis = {
      //   longitud:"",
      //   latitud:"",
      //   distancia: this.calculateDistance(this.lon, lonemp, this.lat, latemp)
      // }
      // almacenar todos los resultados en un objeto y despues que los mande al html
      var t = this.calculateDistance(this.lon, lonemp, this.lat, latemp); 
      // var t = this.getDistance(this.lon, lonemp, this.lat, latemp);
      this.distancias.push(lonemp);  
    });
  }

  calculateDistance(lon1, lon2, lat1, lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    // return Math.trunc(dis);
    // var distanci = Math.sqrt( (lat1- lat2)* (lat1- lat2) + (lon1- lon2)*(lon1- lon2))
    return Math.round(dis * 100) / 100;
    // return Math.round(distanci);
  }

  getEmpresa(){
    this.serviceProvider.getGomeria().then(data => {
      this.empresas = data;
      for(var i=0;i<this.empresas.length;i++){
        this.latMadrid = this.empresas[i].latitud;
        this.lonMadrid = this.empresas[i].longitud;
        this.getGeolocation(this.latMadrid,this.lonMadrid);
      }
      console.log(this.empresas);
      console.log(this.distancias);
      // console.log(this.distancias[0]);
      // // console.log(this.distancias[0]);
      // for(var i=0;i<this.distancias.length;i++){
      //   console.log(this.distancias[i]);
      //   this.empresas[i].distancia = this.distancias[i];
      // }
    });
  }

}
