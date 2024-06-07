import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cons-tarea',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule  ],
  templateUrl: './cons-tarea.component.html',
  styleUrl: './cons-tarea.component.scss'
})
export class ConsTareaComponent {

  tarea1 = new Tarea('Finish Report', 'High', 'Complete the market analysis report.', new Date('2024-06-05').toISOString(), false);
  tarea2 = new Tarea('Design New Website', 'Medium', 'Create wireframes and visual mockups for the new company website.', new Date().toISOString(), true);
  tarea3 = new Tarea('Prepare Presentation', 'Low', 'Gather data and prepare slides for the upcoming team meeting.', new Date().toISOString(), true);

  tareas: Tarea[] = [this.tarea1, this.tarea2, this.tarea3];

  editTarea(tarea: Tarea): void {
    console.log('Edit Tarea:', tarea.prioridad);
    // Implement your edit logic here
  }

  deleteTarea(tarea: Tarea): void {
    console.log('Delete Tarea:', tarea);
    this.tareas = this.tareas.filter(t => t !== tarea);
  }

}
