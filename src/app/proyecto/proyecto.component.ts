import { Component, Input } from '@angular/core';
import { Proyectos } from '../models/Proyecto.models';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {
@Input() datos!: Proyectos;

verDetalles() {
    alert(`Detalles del proyecto: ${this.datos.titulo}`);
  }
}
