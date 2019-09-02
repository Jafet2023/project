import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(public http: HttpClient) {
    console.log('Hola Provider');
  }

  // empresareclamo = 'empresa._id';
  apiUrl = 'https://strapi-udi.herokuapp.com';

  // apiUrl = 'http://127.0.0.1:1337';

  //https://strapi-udi.herokuapp.com
  //http://127.0.0.1:1337
  getEmpresas() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/empresas').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  register(nombre: String, apellidos: String, telefono: Number, correo: String) {
    return this.http.post(this.apiUrl + '/conductors',
      {nombre: nombre, apellidos: apellidos, telefono: telefono, correo: correo}
    )
  }

  PostReclamo(descripcion: String, fecha: Date, empresareclamo: String) {
    return this.http.post(this.apiUrl + '/reclamos',
      {descripcion: descripcion, fecha: fecha, empresa: empresareclamo }
    )
  }

  PostCalificacion(descripcion: String,empresacalificacion: String) {
    return this.http.post(this.apiUrl + '/calificacions',
      {descripcion: descripcion,empresa: empresacalificacion }
    )
  }

  //vista informacion traido por ID
  getDetails(id: string){
    return this.http.get(`${this.apiUrl}/empresas/${id}`);
  }

  getImagenes(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/imagenes').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMecanica(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/empresas?servicios.nombre=Mecanica').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  

  getCerrajero(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/empresas?servicios.nombre=Cerrajeria').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getGrua(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/empresas?servicios.nombre=Grua').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getGomeria(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/empresas?servicios.nombre=Gomeria').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  
}
