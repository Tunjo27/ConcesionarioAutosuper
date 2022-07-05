import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';

@Injectable()
export class ClienteService {
    
public clientes : Array<Cliente>;

    constructor() {
        this.clientes = [
            new Cliente('Erika', 'Avila', 3013244567, 'eavila@gmail.com'),
            new Cliente('Johanna', 'Moreno', 3114567896, 'jomor34@hotmail.com')
        ];
    }

    getCliente() : Array<Cliente> {
        return this.clientes;
    }

}