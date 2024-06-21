//Este archivo fue creado a mano.
//La clase CounterComponent, se convertira realmente en un componente.
//cuando llamemos @component()
//@component() importara
//import { Component } from "@angular/core";
//NO es necesario memorizar todos lo que esta dentro de @angular/core

import { Component } from "@angular/core";


@Component({
  selector:'app-counter',
  template: `
    <h1>Hola counter creado a mano</h1>
    <p>Counter: {{ counter }}</p>
    <button (click)="incrementCounterBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="incrementCounterBy(-1)">-1</button>

  `,
})
//copiamos el contenido de la clase app.component.ts
//y podremos ver que aparecera un nuevo contador en el html
//el cual, trabajara de forma independiente al que esta en app.component.html
export class CounterComponent{
  public counter:number = 10;

  incrementCounterBy(value:number):void{
    this.counter +=value;
  }

  resetCounter():void{
    this.counter = 10;
  }
}
//Este componente para que funcione debe ser definido en
//un modulo, y por ahora el unico modulo que tenemos e app.module.ts

