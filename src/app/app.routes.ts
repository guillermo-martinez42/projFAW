import { Routes } from '@angular/router';
import path from 'path';
import { SignupComponent } from './comp/signup/signup.component';
import { LoginComponent } from './comp/login/login.component';
import { NewTareaComponent } from './comp/new-tarea/new-tarea.component';
import { BuscTareaComponent } from './comp/busc-tarea/busc-tarea.component';
import { ConsTareaComponent } from './comp/cons-tarea/cons-tarea.component';

export const routes: Routes = [
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'app/new-tarea',component:NewTareaComponent},
    {path:'app/busc-tarea',component:BuscTareaComponent},
    {path:'app/cons-tarea',component:ConsTareaComponent}
];
