import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculosComponent } from '../vehiculos/vehiculos.component';
import { RepuestosComponent } from '../repuestos/repuestos.component';


const repuestosRoutes: Routes = [
    { path: 'vehiculos', component: VehiculosComponent },	
    { path: 'repuestos', component: RepuestosComponent }
];

export const repuestosRoutingProviders: any[] = [];
export const repuestosrouting: ModuleWithProviders<any> = RouterModule.forRoot(repuestosRoutes);