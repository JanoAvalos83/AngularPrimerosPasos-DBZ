//Este es el archivo principal para app.component.ssshtml,
//Este archivo esta relacionado 1 a 1 con el template, podremos usar variables específicas,
//métodos, etc

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title:string   = 'Hola mundo';
  public counter:number = 10;

  incrementCounterBy(value:number):void{
    this.counter += value;
  }

  resetCounter():void{
    this.counter = 10;
  }
}
