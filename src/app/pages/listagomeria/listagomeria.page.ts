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
  total:string;

  empresas: any;

  constructor(private serviceProvider: ProvidersService, public navCtrl: NavController, public geolocation:Geolocation) { 
    this.getGeolocation()
  }

  ngOnInit() {
   this.getEmpresa()
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;

      let latMadrid = -17.770637;
      // -17.770637, -63.175327
      let lonMadrid = -63.175327;

      this.total = this.calculateDistance(this.lon, lonMadrid, this.lat, latMadrid) + ' KM ' ;
      
      // this.total = this.calculateDistance(this.lon, lonMadrid, this.lat, latMadrid) + ' KM ' ;
    });
  }

  calculateDistance(lon1, lon2, lat1, lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    // return Math.trunc(dis);
    return Math.round(dis * 100) / 100;
  }

  getEmpresa(){
    this.serviceProvider.getGomeria().then(data => {
      this.empresas = data;
      console.log(this.empresas);
    })
  }

}
