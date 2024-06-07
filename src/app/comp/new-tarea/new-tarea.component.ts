import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';
import { ConsTareaComponent } from '../cons-tarea/cons-tarea.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-new-tarea',
  standalone: true,
  imports: [ReactiveFormsModule, ConsTareaComponent, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, MatButtonModule ],
  templateUrl: './new-tarea.component.html',
  styleUrl: './new-tarea.component.scss'
})
export class NewTareaComponent {

  public tarea = new FormControl();
  public prioridad = new FormControl();
  public desc = new FormControl();
  now = new Date();
  //public fechaCreacion = new FormControl(this.now); 
  public fechaCreacion = this.now.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  status = true;
  tareas :Tarea[]=[];


   tarea1 = new Tarea('Finish Report', 'High', 'Complete the market analysis report.', new Date('2024-06-05').toISOString(), false);
   tarea2 = new Tarea('Design New Website', 'Medium', 'Create wireframes and visual mockups for the new company website.', new Date().toISOString(), true);
   tarea3 = new Tarea('Prepare Presentation', 'Low', 'Gather data and prepare slides for the upcoming team meeting.', new Date().toISOString(), true);

   //tareas: Tarea[] = [this.tarea1, this.tarea2, this.tarea3];

  crear() {
    console.log('Tarea:', this.tarea.value);
    console.log('Prioridad:', this.prioridad.value);
    console.log('Descripción:', this.desc.value);
    console.log('Fecha de Creación:', this.fechaCreacion);
    console.log('Estado:', this.status);
    this.tareas.push(new Tarea( this.tarea.value, this.prioridad.value, this.desc.value, this.fechaCreacion,  this.status ))
  }

}
