import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';


export const routes: Routes = [
    { 
        path: '',
        loadComponent:()=>import('./pages/inicio/inicio.component').then((m)=>m.InicioComponent),
    },
    {
        path:'login',
        loadComponent:()=>import('./pages/login/login.component').then((m)=>m.LoginComponent),
    },
    {
        path:'cuenta',
        loadComponent:()=>import('./pages/cuenta/cuenta.component').then((m)=>m.CuentaComponent),
    }
];
