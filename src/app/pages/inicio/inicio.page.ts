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

  empresas: any;

  categoria = ['Mecanica','Cerrajero']

  slides: { img: string }[] = [
    {
      img: '/uploads/e616ffd3160e4f06b686f4452acb31db.jpg'
    },
    {
      img: '/assets/perro-2.jpg'
    },
    {
      img: '/assets/perro-3.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.cambioCategoria
  }

  cambioCategoria(event){
    console.log();
  }

  // cargarNoticias(categoria : string){
  //   this.noticiasService.getTopHeadlinesCategoria(categoria).subscribe(resp=> {
  //     console.log
  //   })
  // }



}
