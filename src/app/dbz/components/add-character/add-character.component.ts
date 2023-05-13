import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public charcater: Character = {

    name: "abc",
    power: 0
  };

  emitCharacter(): void{

    console.log(this.charcater);
    if(this.charcater.name.length === 0) return


    this.onNewCharacter.emit({ ...this.charcater });
    this.charcater = { name: "", power: 0 }
  }
}
