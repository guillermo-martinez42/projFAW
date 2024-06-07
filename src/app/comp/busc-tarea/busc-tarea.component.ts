import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl } from '@angular/forms';
import { ConsTareaComponent } from '../cons-tarea/cons-tarea.component';

@Component({
  selector: 'app-busc-tarea',
  standalone: true,
  imports: [ReactiveFormsModule, ConsTareaComponent],
  templateUrl: './busc-tarea.component.html',
  styleUrl: './busc-tarea.component.scss'
})
export class BuscTareaComponent {

  clicked = new FormControl(0);
  public buscada = new FormControl();
  public prioridad = new FormControl();

  onClick() {
    this.clicked.setValue(this.clicked.value === 0 ? 1 : 0);
  }

  buscar() {
    console.log('Clicked:', this.clicked.value);
    console.log('Buscar:', this.buscada.value);
    console.log('Prioridad:', this.prioridad.value);
  }

}
