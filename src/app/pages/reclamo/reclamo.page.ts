import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/providers.service';


@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.page.html',
  styleUrls: ['./reclamo.page.scss'],
})
export class ReclamoPage implements OnInit {

  empresas: any;
  
  constructor(private serviceProvider: ProvidersService) { }

  ngOnInit() {
    // this.serviceProvider.getEmpresas().then(data => {
    //   this.empresas = data;
    //   console.log(this.empresas);
    // })
    this.serviceProvider.getEmpresas().then( data => {
        this.empresas = data;
        console.log(this.empresas);
      });
  }

}
