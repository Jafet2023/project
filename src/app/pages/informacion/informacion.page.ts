import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvidersService } from '../../providers.service';
import { ProductEmpresa } from 'src/app/empresa';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  information: any;

  isLoading = true;

  constructor(private serviceProvider: ProvidersService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id =this.route.snapshot.paramMap.get('id');
    this.serviceProvider.getDetails(id).subscribe(result => {
      console.log('details:', result);
      this.information = result;
    });
  }

}