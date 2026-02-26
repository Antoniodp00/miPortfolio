import { Component } from '@angular/core';
import { Proyectos } from '../.Proyectos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
 misProyectos : any[] = [];
  constructor(private proyectosService: ProyectosService) {
    this.misProyectos = this.proyectosService.obtenerProyectos();
  }
}
