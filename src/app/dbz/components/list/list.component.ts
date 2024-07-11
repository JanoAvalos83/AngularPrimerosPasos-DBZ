import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',

})
export class ListComponent {


  //Al poner el decorador Input() sobre una
  //property (characterList), estoy diciendo que
  //mi ListComponent, puede recibir una property
  //(desde el padre main-page.comonent.ts)
  //llamada characterList, se puede cambiar el nombre
  //a la property usando @Input("Nombre property")

  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  // onDeleteCaharacter(index:number):void{
  //   this.onDelete.emit(index);
  //   console.log(index)
  // }

  onDeleteCaharacter(id?:string):void{

    if(!id){
      return
    }

    this.onDelete.emit(id);
  }
}
