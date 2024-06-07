import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject  } from 'rxjs';
import { Tarea } from '../models/tarea.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private tarea = new BehaviorSubject<Tarea>(new Tarea('','','','',true))
  currentTarea = this.tarea.asObservable();

  private tareas = new BehaviorSubject<Array<Tarea>>([]);
  currentTareas = this.tareas.asObservable();

  private usuario = new BehaviorSubject<Usuario >(new Usuario('','','','',''))
  currentUsuario = this.tarea.asObservable();


  addTareas(tar: Tarea){
    let array = this.tareas.getValue();
    array.push(tar);
    this.tareas.next(array);

  }

  //buscar
  private sortSubject = new Subject<void>();

  sortTareas$ = this.sortSubject.asObservable();

  triggerSort() {
    this.sortSubject.next();
  }

  private filterSubject = new Subject<string>();
  filterTareas$ = this.filterSubject.asObservable();

  filterTareasByPriority(priority: string) {
    this.filterSubject.next(priority);
  }

  private filterSearchTermSubject = new Subject<string>();
  filterSearchTermTareas$ = this.filterSearchTermSubject.asObservable();

  filterSearchTermTareas(searchTerm: string) {
    this.filterSearchTermSubject.next(searchTerm);
  }




  constructor() { }
}
