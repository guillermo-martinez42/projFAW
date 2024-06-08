import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';
import { CommonModule } from '@angular/common';
import { ShareDataService } from '../../services/share-data.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../confirm-delete-dialog/confirm-delete-dialog.component';





@Component({
  selector: 'app-cons-tarea',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './cons-tarea.component.html',
  styleUrl: './cons-tarea.component.scss'
})
export class ConsTareaComponent implements OnInit {


  @Input() tareas: Array<Tarea> = [];

  originalTareas: Tarea[] = [];
  filteredTareas: Tarea[] = [];

  constructor(private share:ShareDataService, public dialog: MatDialog){}


  ngOnInit(): void {
      this.share.currentTareas.subscribe(x => this.tareas = x );
      this.share.sortTareas$.subscribe(() => this.sortTareasAlphabetically());
      this.share.filterTareas$.subscribe(priority => this.filterTareasByPriority(priority));
      this.share.filterSearchTermTareas$.subscribe(searchTerm => this.filterSearchTermTareas(searchTerm));
      this.originalTareas = this.tareas; 
  }

  sortTareasAlphabetically(): void {
    this.tareas.sort((a, b) => a.nombreTarea.localeCompare(b.nombreTarea));
  }
  filterTareasByPriority(priority: string): void {
    if (priority==='All'){
      this.tareas = this.originalTareas;
    }else if (priority) {
      this.tareas = this.tareas.filter(tarea => tarea.prioridad === priority);
    } else {
      this.tareas = this.tareas;
    }
  }

  filterSearchTermTareas(searchTerm: string): void {
    if (searchTerm) {
      this.filteredTareas = this.filteredTareas.filter(tarea => tarea.nombreTarea.toLowerCase().includes(searchTerm.toLowerCase()));
      console.log(searchTerm);
    } else {
      this.filteredTareas = [...this.originalTareas]; 
    }
  }

  //@Output() borrarTarea: EventEmitter<Tarea> = new EventEmitter<Tarea>();


  confirmDelete(tarea: Tarea): void {
    console.log('Delete Tarea:', tarea);
    this.tareas = this.tareas.filter(t => t !== tarea);
    //this.borrarTarea.emit(tarea);
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteTarea(tarea);
      }
    });

  }

  deleteTarea(tarea: Tarea): void {
    const index = this.tareas.indexOf(tarea);
    if (index > -1) {
      this.tareas.splice(index, 1);
      this.share.updateTareas(this.tareas);
    }

}
}
