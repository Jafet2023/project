import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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
    return this.http.post(this.apiUrl + '/conductores',
      {nombre: nombre, apellidos: apellidos, telefono: telefono, correo: correo}
    ).pipe(tap(console.log));
  }

  PostReclamo(descripcion: String, fecha: Date, empresareclamo: String, conductorecalificacion: Number) {
    return this.http.post(this.apiUrl + '/reclamos',
      {descripcion: descripcion, fecha: fecha, empresa: empresareclamo, conductore: conductorecalificacion }
    )
  }

  PostCalificacion(descripcion: String,empresacalificacion: String, fecha: Date, conductorecalificacion: Number) {
    console.log(conductorecalificacion);
    return this.http.post(this.apiUrl + '/calificaciones',
      {descripcion: descripcion,empresa: empresacalificacion, fecha: fecha, conductore: conductorecalificacion}
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

  getElectrico(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/empresas?servicios.nombre=Electrico').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
