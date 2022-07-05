import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { ClienteService} from '../services/cliente/cliente.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ ClienteService ]
})
export class ClientesComponent implements OnInit {

  public clientes: Array<Cliente>;
  public cliente: Cliente;
  public clienteView: Cliente;

  constructor(private _clienteService : ClienteService) {
    this.clientes = [];
    this.cliente = {
        nombre: '',
        apellido: '',
        celular: 0,
        email: ''
    };

    this.clienteView = this.cliente;

}

  ngOnInit(): void {
    this.clientes = this._clienteService.getCliente();
    console.log(this.clientes)
  }

  deleteCliente(index: number) {
    this.clientes.splice(index, 1);
}

onSubmit(form: any) {
    console.log(this.cliente);
    this.clienteView = Object.assign({}, this.cliente);
    this.clientes.push(this.clienteView);
    form.reset();
}

}
