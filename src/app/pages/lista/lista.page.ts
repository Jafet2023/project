import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';
import { Observable } from 'rxjs';
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
    this.serviceProvider.getEmpresas().then(data => {
      this.empresas = data;
      console.log(this.empresas);
    });
  }

}
