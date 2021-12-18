import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent  {

  version: string = require( '../../../../package.json').version;
  name: string = require( '../../../../package.json').name;

}
