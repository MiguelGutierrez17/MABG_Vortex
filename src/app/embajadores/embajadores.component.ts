import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embajadores',
  templateUrl: './embajadores.component.html',
  styleUrls: ['./embajadores.component.scss']
})
export class EmbajadoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  embajadores = [{
    nombre: 'Miguel',
    apellidos: 'Bernal Gutiérrez',
    edad: 23,
    experiencia: '6 Meses',
    calificacion: '⭐⭐⭐⭐',
    tarifa: 50000,
    imagen: 'mbg'
  },{
    nombre: 'Christian',
    apellidos: 'Bernal Gutiérrez',
    edad: 31,
    experiencia: '2 Años',
    calificacion: '⭐⭐⭐⭐⭐',
    tarifa: 65000,
    imagen: 'cbg'
  },{
    nombre: 'Angela',
    apellidos: 'Bernal Gutiérrez',
    edad: 26,
    experiencia: '2 Meses',
    calificacion: '⭐⭐⭐',
    tarifa: 25000,
    imagen: 'abg'
  },{
    nombre: 'Miriam',
    apellidos: 'Gutiérrez Romero',
    edad: 52,
    experiencia: '5 Años',
    calificacion: '⭐⭐⭐⭐⭐',
    tarifa: 75000,
    imagen: 'mgr'
  },{
    nombre: 'Camila',
    apellidos: 'Millán Suarez',
    edad: 26,
    experiencia: '2.5 Años',
    calificacion: '⭐⭐⭐⭐',
    tarifa: 45000,
    imagen: 'cms'
  },{
    nombre: 'Jacobo',
    apellidos: 'Martinez Rodriguez',
    edad: 19,
    experiencia: '1 Año',
    calificacion: '⭐⭐⭐',
    tarifa: 40000,
    imagen: 'jmr'
  },{
    nombre: 'Natalia',
    apellidos: 'Medina Castro',
    edad: 25,
    experiencia: '2 Años',
    calificacion: '⭐⭐⭐⭐⭐',
    tarifa: 55000,
    imagen: 'nmc'
  },{
    nombre: 'Veronica',
    apellidos: 'Ferrucho Torrado',
    edad: 22,
    experiencia: '2.5 Años',
    calificacion: '⭐⭐⭐⭐',
    tarifa: 60000,
    imagen: 'vft'
  },]
}
