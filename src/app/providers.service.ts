import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  register(nombre: String, telefono: String, correo: String) {
    return this.http.post(this.apiUrl + '/conductors',
      {nombre: nombre, telefono: telefono, correo: correo}
    )
  }

  // addEmpresas(data) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.apiUrl + '/empresas', JSON.stringify(data))
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }

  getDetails(id: string){
    return this.http.get(`${this.apiUrl}/empresas/${id}`);
  }

  getMecanica(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/rubros/5d179cc260be3821a064d474').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCerrajero(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/rubros/5d179ccc60be3821a064d475 ').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getGrua(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/rubros/5d1e7bc6b486684060e5d714').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getGomeria(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/rubros/5d179cbc60be3821a064d473').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  
}
