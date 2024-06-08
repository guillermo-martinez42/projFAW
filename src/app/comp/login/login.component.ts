import { Component,  OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public email = new FormControl();
  public pass = new FormControl();
  public usuarios : Usuario[]=[]

  constructor(private auth:AuthService, private router:Router){}

  ngOnInit(): void {
    this.auth.currentUsiarios.subscribe(x => this.usuarios = x);
}

user1 = new Usuario('gdavd42@gmail.com','07-10', 'david', '1234', 'male');

   logIn() {
    console.log('Email:', this.email.value);
    console.log('Password:', this.pass.value);
    if (this.auth.login(this.email.value, this.pass.value)) {
      this.router.navigateByUrl('/app/new-tarea');
    } else {
      this.router.navigateByUrl('signup');
      console.log('Invalid email or password');
    }
  }

}
