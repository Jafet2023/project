import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  imagenes: any;

  categoria = ['Mecanica','Cerrajero']

  constructor(private serviceProvider: ProvidersService) { }

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
