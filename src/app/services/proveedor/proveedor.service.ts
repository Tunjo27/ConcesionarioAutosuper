import { Injectable } from '@angular/core';
import { Proveedor } from 'src/app/model/Proveedor';

@Injectable()
export class ProveedorService {

    public proveedores: Array<Proveedor>;

    constructor() {

        this.proveedores = [
            new Proveedor('Juan', 1, 'a', 1, 'Nauj3@hotmail.com'),
            new Proveedor('Marta', 2, 'b', 2, 'Martis23@gmail.com')
        ];

    }

    getProveedor() : Array<Proveedor> {
        return this.proveedores;
    }

}