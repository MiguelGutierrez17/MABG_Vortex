import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  constructor() { }

  embajador_valor = 0;
  tarifa_valor = 0;

  ngOnInit(): void {
  }

  capturarValorE(e: any){
    this.embajador_valor = e.target.value;
  }

  capturarValorP(e: any){
    this.tarifa_valor = e.target.value;
  }

    planes = [{
      nombre: 'Plan individual',
      descripcion: 'El plan individual será tu punto de inicio a nuestros servicios, tendrás la oportunidad de escoger un embajador PetFriends y tendrás protección asegurada para tu mascota de acuerdo con la tarifa que tenga nuestro embajador por los días necesarios y sin necesidad de preocuparte ni un solo día, además tendrás comunicación on-demand sobre el estado de tu mascota.',
      precio_ini: 75000,
      precio_fin: 75000 * 1,
      descuento: 1,
      imagen: 'plan1'
    }, {
      nombre: 'Plan 7 días',
      descripcion: 'El plan 7 días consta con todos los beneficios del plan individual, además de eso podrás contar con un descuento adicional por pagar un servicio de 7 días de contado, este será del 10% de acuerdo con la tarifa total del servicio y el embajador de tu preferencia, para ejemplificarte cómo funciona tomaremos una tarifa de 75.000 COP/Día.',
      precio_ini: 75000,
      precio_fin: 75000 * 0.9,
      descuento: 0.9,
      imagen: 'plan2'
    }, {
      nombre: 'Plan 30 días',
      descripcion: 'El plan 30 días consta con todos los beneficios del plan individual, además de eso podrás contar con un descuento adicional por pagar un servicio de 30 días de contado, este será del 20% de acuerdo con la tarifa total del servicio y el embajador de tu preferencia, para ejemplificarte cómo funciona tomaremos una tarifa de 75.000 COP/Día.',
      precio_ini: 75000,
      precio_fin: 75000 * 0.8,
      descuento: 0.8,
      imagen: 'plan3'
    }]

    embajadores = [{
      nombre: 'Miguel Bernal Gutiérrez',
      tarifa: 50000,
    }, {
      nombre: 'Christian Bernal Gutiérrez',
      tarifa: 65000,
    }, {
      nombre: 'Angela Bernal Gutiérrez',
      tarifa: 25000,
    }, {
      nombre: 'Miriam Gutiérrez Romero',
      tarifa: 75000,
    }, {
      nombre: 'Camila Millán Suarez',
      tarifa: 45000,
    }, {
      nombre: 'Jacobo Martinez Rodriguez',
      tarifa: 40000,
    }, {
      nombre: 'Natalia Medina Castro',
      tarifa: 55000,
    }, {
      nombre: 'Veronica Ferrucho Torrado',
      tarifa: 60000,
    },]
  }  
