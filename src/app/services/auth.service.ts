import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { BehaviorSubject, Subject  } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario = new BehaviorSubject<Usuario >(new Usuario('','','','',''))
  currentUsuario = this.usuario.asObservable();

  private usuarios = new BehaviorSubject<Array<Usuario>>([]);
  currentUsiarios = this.usuarios.asObservable();

  addUsuario(user:Usuario){

    let array = this.usuarios.getValue();
    array.push(user);
    this.usuarios.next(array);
    console.log(this.usuarios);
  }

  login(email: string, password: string): boolean {
    const usuarios = this.usuarios.getValue();
    const matchingUser = usuarios.find(
      (user) => user.email === email && user.pass === password
    );

    if (matchingUser) {
      this.usuarios.next(usuarios);
      return true; 
    } else {
      console.error('Invalid email or password'); 
      return false; 
    }
  }










  private users: Usuario[] = []; // Array to store registered users
  private isAuthenticated = false;

  constructor(private router: Router) { }



  signup(user: Usuario): void {
    this.users.push(user);
    this.isAuthenticated = true;
    this.router.navigate(['/app/new-tarea']);
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }
}
