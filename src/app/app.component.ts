import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guiMyRestGpio';

  version: string = require( '../../package.json').version;
  name: string = require( '../../package.json').name;

}
