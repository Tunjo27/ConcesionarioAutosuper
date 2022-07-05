import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { repuestosrouting, repuestosRoutingProviders} from './repuestos/repuestos.routing';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { TallerComponent } from './taller/taller.component';
import { RepuestosListComponent } from './repuestos/repuestos-list/repuestos-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RepuestosComponent,
    HomeComponent,
    ClientesComponent,
    ProveedoresComponent,
    VehiculosComponent,
    TallerComponent,
    RepuestosListComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    repuestosrouting,
    routing,
    HttpClientModule
  ],
  providers: [
    repuestosRoutingProviders,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
