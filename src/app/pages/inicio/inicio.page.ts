import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  imagenes: any;

  constructor(private serviceProvider: ProvidersService,
              private storage: Storage) {
    this.storage.get('USER_INFO').then((response) => {
      console.log(response);
    });
   }

  ngOnInit() {
    this.getImagenes();
  }

  getImagenes(){
    this.serviceProvider.getImagenes().then(data => {
      this.imagenes = data;
      console.log(this.imagenes);
    });
  }

}
