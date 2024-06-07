import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';
import { CommonModule } from '@angular/common';
import { ShareDataService } from '../../services/share-data.service';



@Component({
  selector: 'app-cons-tarea',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './cons-tarea.component.html',
  styleUrl: './cons-tarea.component.scss'
})
export class ConsTareaComponent implements OnInit {


  @Input() tareas: Array<Tarea> = [];

  constructor(private share:ShareDataService){}

  ngOnInit(): void {
      this.share.currentTareas.subscribe(x => this.tareas = x )
  }

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
