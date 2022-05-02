import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  mensaje = "";
  er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  sendbtn = document.getElementById('sender');

  ngOnInit(): void {
  }

  validarFormulario(evt: any) {

    if (evt.target.value.length > 0) {
      evt.target.classList.remove('error-input');
      evt.target.classList.add('success-input');
      this.mensaje = "";
    } else {
      this.mensaje = "Campo necesario";
      evt.target.classList.remove('success-input');
      evt.target.classList.add('error-input');
    }

    if (evt.target.type === 'email') {
      if (this.er.test(evt.target.value)) {
        evt.target.classList.remove('error-input');
        evt.target.classList.add('success-input');
        this.mensaje = "";
      } else {
        evt.target.classList.remove('success-input');
        evt.target.classList.add('error-input');
        this.mensaje = "Este no es un correo valido";
      }
    }

    const aciertos = document.querySelectorAll(".success-input");
    this.revisarBoton(aciertos);

  }

  revisarBoton(aciertos:any){
    console.log(aciertos);
    if(aciertos.length === 2){
      this.sendbtn = document.getElementById('sender');
      if (this.sendbtn !== null) {
        (this.sendbtn as HTMLButtonElement).disabled = false;
        this.sendbtn.classList.remove('send-init');
      }
    }
    if(aciertos.length !== 2){
      this.sendbtn = document.getElementById('sender');
      if (this.sendbtn !== null) {
        (this.sendbtn as HTMLButtonElement).disabled = true;
        this.sendbtn.classList.add('send-init');
      }
    }
  }

  enviarRegistro(evt:any) {
    evt.preventDefault();
    const spinner = document.querySelector('#spinnerid');
    if(spinner !== null){
      spinner.classList.remove('spinner');
      spinner.classList.add('spinner-success');
    }
    
    setTimeout(() => {
      if(spinner !== null){
        spinner.classList.remove('spinner-success');
        spinner.classList.add('spinner');
      }
        this.mensaje = "Ingreso exitoso :)"
        setTimeout(() => {
            this.mensaje = "";
            this.ngOnInit();
        }, 5000);
    }, 3000);
  }
}
