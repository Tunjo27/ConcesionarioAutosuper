import { Injectable } from '@angular/core';
import { Repuesto } from 'src/app/model/Repuesto';

@Injectable()
export class RepuestoService {
    
public repuestos : Array<Repuesto>;

    constructor() {
        this.repuestos = [
            new Repuesto('Embrague', 'Nexus', 300000, 1, 'Negro'),
            new Repuesto('Plumilla', 'Bosch Aerotwin', 600000, 8, 'Negro')
        ];
    }

    getRepuesto() : Array<Repuesto> {
        return this.repuestos;
    }

}