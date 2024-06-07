import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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




  constructor() { }
}
