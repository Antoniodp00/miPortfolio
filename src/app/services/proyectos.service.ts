import { Injectable } from '@angular/core';
import { Proyectos } from '../models/proyecto.models';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  misProyectos: Proyectos[] = [
    { titulo: 'Proyecto 1', descripcion: 'Descripción del proyecto 1' },
    { titulo: 'Proyecto 2', descripcion: 'Descripción del proyecto 2' },
    { titulo: 'Proyecto 3', descripcion: 'Descripción del proyecto 3' }
  ];

  constructor() {}

  obtenerProyectos(): Proyectos[] {
    return this.misProyectos;
  }
}