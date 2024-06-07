import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  public email = new FormControl();
  public nombre = new FormControl();
  public dob = new FormControl();
  public pass = new FormControl();
  public genero = new FormControl();
  public usuarios : Usuario[]=[]



   signUp() {
    this.usuarios.push(new Usuario(this.email.value, this.nombre.value, this.dob.value, this.pass.value, this.genero.value))
    console.log('Email:', this.email.value);
    console.log('Nombre:', this.nombre.value);
    console.log('DOB:', this.dob.value);
    console.log('Password:', this.pass.value);
    console.log('Genero:', this.genero.value);
  }

}
