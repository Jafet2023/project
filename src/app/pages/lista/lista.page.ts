import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';
import { ProductEmpresa } from '../../empresa';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  
  empresas: any;

  constructor(private serviceProvider: ProvidersService) { }

  ngOnInit() {
    this.serviceProvider.getMecanica().then(data => {
      this.empresas = data;
      console.log(this.empresas);
    })
  }

}
