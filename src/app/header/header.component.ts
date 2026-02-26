import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
nombre: string = 'Antonio Delgado Portero';
profesion: string = 'Desarrollador multiplataforma';
}
