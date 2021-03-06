import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
 
 
@Injectable()
export class AuthenticationService {
  
  info :  any;
  authState = new BehaviorSubject(false);
 
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
 
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
 
 
  login(id:string, nombre:string, apellidos:string) {
    var dummy_response = {
      user_id: id,
      user_nombre: nombre,
      user_apellido: apellidos
    };
    this.storage.set('USER_INFO', dummy_response).then((response) => {
      this.router.navigate(['inicio']);
      console.log(response);
      this.authState.next(true);
    });
  }

  getuser(){
    this.storage.get('USER_INFO').then((val) => {
      console.log('localstorage gave me ', val);
      
    });
  }
 
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authState.value;
  }
}