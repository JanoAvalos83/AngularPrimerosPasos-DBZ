import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

//recivir informacion desde formulario,
//puede ser atravez de one way data o
//two way data, two way data es mas complicado ya que si cambio el modelo
//cambia mi html y si modifico el html, tambien cambia mi typescript
//Mas adelante se veran metodos adecuado para el manejo de formulario
//En la sintaxis:
//[] hacemos referencia a un atributo
//() Hacemos referencia a un evento
//[()] Hacemos referencia a un evento y un atributo
//Para trabajar con [(ngModel)] debemos importar en nuestro modulo principal
//en este caso en dbz.module.ts
//Recordar que cada componente debe ser autonomo, si necesitamos
//[(ngModel)] en otros componentes debemos llamarlo para cada uno
//usamos import {FormsModule} from '@angular/form'

@Component({
  selector:     'dbz-add-character',
  templateUrl:  './add-character.component.html',
  styleUrl:     './add-character.component.css'
})
export class AddCharacterComponent {

  //En public character, se recibiran los datos
  //directamente del formulario, por lo que debemos reiniciar los
  //datos cuando se realice el submit

  // para poder exportar de mi componente
  // add-Character a otro debemos tener la siguiente sintaxis
  // public onNewCharacter: EventEmiter<Character> = new EventEmitter();
  // EventEmiter<Character> es un objeto generico, el cual tiene un tipo
  // de dato Character, que fluye de este objeto
  //Para que mi main-page.component.html escuche este emisor de evento debo
  //poner la etiqueta @Output() ambos importados desde '@angular/core'

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:   '',
    power:  0
  };

  emitCharacter():void{
    // debuguer nos ayuda a parar el programa y recorrer paso a paso
    // nuestro programa gracias a las herramientas de angular en la vista
    // debugger;
    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character});

    // Al principio tenia esta sintaxis this.onNewCharacter.emit(this.character),
    // pero el objeto guardado se modificaba en tiempo real
    // dentro del arreglo, esto es debido a que el objeto queda referenciado hacia el espacio en memoria,
    // por lo que haciendo una compileFactoryFunction, este funcionaba como debia

    this.character.name = '',
    this.character.power =  0
  }

}
