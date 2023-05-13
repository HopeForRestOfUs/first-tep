import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input() public characterList: Character[] = [{
    id: v4(),
    name: "Trunks",
    power: 4500
  }];
  @Output() public sendIndexToDad: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string): void{

  if(!id) return;

    this.sendIndexToDad.emit(id);
  }
}
