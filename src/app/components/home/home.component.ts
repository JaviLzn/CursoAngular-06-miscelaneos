import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
  eius nam officiis porro, optio repudiandae, iusto minima ex eum voluptatum
  molestias sunt consectetur deleniti beatae expedita temporibus eligendi quasi,
   omnis dolor aliquid delectus? Veniam odit dolores eum eos ut laborum voluptas
   id error, pariatur dolore voluptatum eligendi accusamus quas accusantium atque
    impedit recusandae dignissimos similique quasi cumque expedita. Consequuntur, iste.</p>
  <app-clases></app-clases>

  <p [appResaltado]="'#2E4131'" >
    Lorem, ipsum dolor sit
  </p>

  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
