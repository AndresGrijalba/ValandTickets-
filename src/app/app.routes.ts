import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { 
        path: '',
        loadComponent:()=>import('./pages/inicio/inicio.component').then((m)=>m.InicioComponent),
    },
    {
        path:'login',
        loadComponent:()=>import('./pages/login/login.component').then((m)=>m.LoginComponent),
    }
];
