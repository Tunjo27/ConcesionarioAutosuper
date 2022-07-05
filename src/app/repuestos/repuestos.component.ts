import { Component, OnInit } from '@angular/core';
import { Repuesto } from '../model/Repuesto'
import { RepuestoService} from '../services/repuesto/repuesto.service'

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css'],
  providers: [ RepuestoService ]
})
export class RepuestosComponent implements OnInit {

  public repuestos: Array<Repuesto>;
  public repuesto: Repuesto;
  public repuestoView: Repuesto;

  constructor(private _repuestoService : RepuestoService) {
    this.repuestos = [];
    this.repuesto = {
        nombre: '',
        marca: '',
        precio: 0,
        cantidad: 1,
        proveedor: ''
    };

    this.repuestoView = this.repuesto;

}

  ngOnInit(): void {
    this.repuestos = this._repuestoService.getRepuesto();
        console.log(this.repuestos)
  }

  updateRepuesto() {
  }

  onSubmit(form: any) {
    console.log(this.repuesto);
    this.repuestoView = Object.assign({}, this.repuesto);
    this.repuestos.push(this.repuestoView);
    form.reset();
  }
}
