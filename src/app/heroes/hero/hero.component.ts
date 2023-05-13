import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "ironMan";
  public age: number = 45;

  CapitalizedName(): string{

    return this.name.toUpperCase();
  }

  heroDescription(): string{

    return `${this.name.toUpperCase()} - ${this.age} Years Old`
  }

  changeName(NewName: string = "Spiderman"): void{

    this.name = NewName;
  }

  chancheAge(Newage: number = 25){

    this.age = Newage;
  }

  ResetForm():void{

    this.name = "IronMan";
    this.age = 45;
  }
}
