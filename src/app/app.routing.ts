import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TallerComponent } from './taller/taller.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';


const appRoutes: Routes = [
    { path: 'taller', component: TallerComponent },	
    { path: 'home', component: HomeComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'proveedores', component: ProveedoresComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);