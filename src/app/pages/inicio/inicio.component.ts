import { Component } from '@angular/core';
import { ProyectosService } from '../../services/Proyectos.service';
import { Proyectos } from '../../models/proyecto.models';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  misProyectos: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService) {
    this.misProyectos = this.proyectosService.obtenerProyectos();
  }
}