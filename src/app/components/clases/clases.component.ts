import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta = 'alert-danger';

  cargar = false;

  propiedades: Object = {
    danger: true
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.cargar = true;

    setTimeout ( () => this.cargar = false, 2000);
  }

}
