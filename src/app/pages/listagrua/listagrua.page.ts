import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';

@Component({
  selector: 'app-listagrua',
  templateUrl: './listagrua.page.html',
  styleUrls: ['./listagrua.page.scss'],
})
export class ListagruaPage implements OnInit {

  empresas: any;

  constructor(private serviceProvider: ProvidersService) { }

  ngOnInit() {
    this.serviceProvider.getGrua().then(data => {
      this.empresas = data;
      console.log(this.empresas);
    })
  }

}
