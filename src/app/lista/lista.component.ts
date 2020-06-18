import { AUTOMOVILES } from "../data";
import { Automovil } from '../models';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  autos: Automovil[];

  constructor() { }

  ngOnInit()  {
    this.autos = AUTOMOVILES; 
  }

}
