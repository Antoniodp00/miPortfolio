import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
misProyectos = [
    { titulo: 'Proyecto 1', descripcion: 'Descripción del proyecto 1' },
    { titulo: 'Proyecto 2', descripcion: 'Descripción del proyecto 2' },
    { titulo: 'Proyecto 3', descripcion: 'Descripción del proyecto 3' }
  ];
  constructor() { 
  }
  obtenerProyectos() {
    return this.misProyectos;
  }
}
