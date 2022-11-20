import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public empleados !: Array<Empleado>;

  constructor(
    private _service: LoginService
  ) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.empleados = response;
    });
  }

}
