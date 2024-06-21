import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = "IronMan";
  public age:number = 40;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getheroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = "Spiderman"
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = "IronMan"
    this.age = 40
  }
}
