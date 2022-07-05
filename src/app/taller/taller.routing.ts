import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepuestosComponent } from '../repuestos/repuestos.component';
import { VehiculosComponent } from '../vehiculos/vehiculos.component';


const appRoutes: Routes = [
    { path: 'repuestos', component: RepuestosComponent },
    { path: 'vehiculos', component: VehiculosComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);