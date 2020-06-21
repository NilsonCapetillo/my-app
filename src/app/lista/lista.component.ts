import { AUTOMOVILES } from "../data";
import { Automovil } from '../models';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;

  closeResult = "";
  constructor(private modalServices: NgbModal) { }
  
  ngOnInit()  {
    this.autos = AUTOMOVILES; 
  }

  onSelect(auto: Automovil){
    this.autoSeleccionado = auto;
  }

}
