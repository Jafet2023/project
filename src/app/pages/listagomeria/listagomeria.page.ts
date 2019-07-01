import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../providers.service';

@Component({
  selector: 'app-listagomeria',
  templateUrl: './listagomeria.page.html',
  styleUrls: ['./listagomeria.page.scss'],
})
export class ListagomeriaPage implements OnInit {

  empresas: any;

  constructor(private serviceProvider: ProvidersService) { }

  ngOnInit() {
    this.serviceProvider.getGomeria().then(data => {
      this.empresas = data;
      console.log(this.empresas);
    })
  }

}
