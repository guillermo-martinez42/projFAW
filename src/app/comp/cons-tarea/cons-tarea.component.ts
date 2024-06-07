import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cons-tarea',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './cons-tarea.component.html',
  styleUrl: './cons-tarea.component.scss'
})
export class ConsTareaComponent {


  @Input() tareas: Array<Tarea> = [];

  //@Output() borrarTarea: EventEmitter<Tarea> = new EventEmitter<Tarea>();

  editTarea(tarea: Tarea): void {
    console.log('Edit Tarea:', tarea.prioridad);
    // Implement your edit logic here
  }

  deleteTarea(tarea: Tarea): void {
    console.log('Delete Tarea:', tarea);
    this.tareas = this.tareas.filter(t => t !== tarea);
    //this.borrarTarea.emit(tarea);

  }

}
