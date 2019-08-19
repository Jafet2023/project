import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';

@Component({
  selector: 'app-listacerrajeria',
  templateUrl: './listacerrajeria.page.html',
  styleUrls: ['./listacerrajeria.page.scss'],
})
export class ListacerrajeriaPage implements OnInit {

  empresas: any;

  constructor(private serviceProvider: ProvidersService) { }

  ngOnInit() {
    this.serviceProvider.getGomeria().then(data => {
      this.empresas = data;
      console.log(this.empresas);
    })
  }

}
