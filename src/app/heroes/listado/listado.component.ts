import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  
  heroes: string[] = ['Capi','Extrange','Spiderman','Ironman'];
  heroeBorrado: string = '';

  borrarHeroe() {
    
    this.heroeBorrado = this.heroes.shift() || '';

  }
}
