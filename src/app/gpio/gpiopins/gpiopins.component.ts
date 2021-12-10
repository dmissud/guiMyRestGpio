import { Component, OnInit } from '@angular/core';

export interface GpioPins {
  position: number;
  name: string;
  address: number;
  state: string;
}

const ELEMENT_DATA: GpioPins[] = [
  {position: 1, name: 'Led', address: 22, state: '0'},
  {position: 2, name: 'Button', address: 24, state: '0'}
];

@Component({
  selector: 'app-gpiopins',
  templateUrl: './gpiopins.component.html',
  styleUrls: ['./gpiopins.component.css']
})
export class GpiopinsComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-address', 'demo-state'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
