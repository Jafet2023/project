import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvidersService } from '../../providers.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  error_messages = {
    'nombre':[
      { type: 'required', message: 'Nombre es requerido'}
      // { type: 'required', message: 'no olvide tu name'},
    ],
    'apellidos':[
      { type: 'required', message: 'apellidos es requerido'}
      // { type: 'required', message: 'pon tus apellidos'},
    ],
    'telefono':[
      { type: 'required', message: 'telefono es requerido'}
      // { type: 'required', message: 'no olvide telefono'},
    ],
    'correo':[
      { type: 'required', message: 'Correo es requerido'}
      // { type: 'required', message: 'aqui van tu correo si es que tienes'},
    ],
  }
  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

avatarSlide = {
  slidesPerView: 3.5
};
  constructor(private serviceProvider: ProvidersService, public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      nombre: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      apellidos: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      telefono: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
      ])),
      correo: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    })
   }

  ngOnInit() {
  }

  // login(fLogin: NgForm) {
  //   console.log(fLogin.valid);
  // }

  Registro(fRegistro: NgForm) {
    this.serviceProvider.register(fRegistro.value.nombre, fRegistro.value.apellidos, fRegistro.value.telefono, fRegistro.value.correo)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  seleccionarAvatar( avatar ) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
  }
  
}
