import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductEmpresa } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(public http: HttpClient) {
    console.log('Hola Provider');
  }

  apiUrl = 'http://127.0.0.1:1337';

  getEmpresas() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/empresas').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addEmpresas(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/empresas', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  /* addEmpresas(empresa: Empresa){
    return this.http.post(this.apiUrl + '/empresas', JSON.stringify(empresa));
  } */

  register(data) {
    return new Promise((resolve, reject) => {

       this.http.post(this.apiUrl + '/empresas', JSON.stringify(data))
       .subscribe(res => {
       resolve(res);
       }, (err) => {
         reject(err);

        });
       });
      }

}
