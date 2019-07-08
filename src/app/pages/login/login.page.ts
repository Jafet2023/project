import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvidersService } from '../../providers.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
  constructor(private serviceProvider: ProvidersService) { }

  ngOnInit() {
  }

  login(fLogin: NgForm) {
    console.log(fLogin.valid);
  }

  Registro(fRegistro: NgForm) {
    console.log(fRegistro.valid);
    this.serviceProvider.register(fRegistro.value.nombre, fRegistro.value.telefono, fRegistro.value.email)
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

  // register(form: NgForm) {
  //   this.serviceProvider.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(
  //     data => {
  //       this.serviceProvider.login(form.value.email, form.value.password).subscribe(
  //         data => {
  //         },
  //         error => {
  //           console.log(error);
  //         }
  //       );
  //       // this.serviceProvider.presentToast(data['message']);
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     () => {
        
  //     }
  //   );
  // }
}
