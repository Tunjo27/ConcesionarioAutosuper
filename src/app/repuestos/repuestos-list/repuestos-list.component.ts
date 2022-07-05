import { Component, OnInit, Input} from '@angular/core';
import { Repuesto } from 'src/app/model/Repuesto';

@Component({
  selector: 'app-repuestos-list',
  templateUrl: './repuestos-list.component.html',
  styleUrls: ['./repuestos-list.component.css']
})
export class RepuestosListComponent implements OnInit {
  @Input() repuesto: any;
  public validacion: Boolean;

  constructor() {
    this.validacion = false;
   }

  ngOnInit(): void {
  }

  enter() {
    this.validacion = true;
  }

  back() {
    this.validacion = false;
  }

}