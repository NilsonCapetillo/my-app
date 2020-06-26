import { Component, OnInit } from '@angular/core';
import {COUNTRIES} from '../data';
import {Country} from '../models';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  countries = COUNTRIES;
}
