import { Injectable } from "@angular/core";
import { v4 } from "uuid";
import { Character } from "../interfaces/character.interface";

@Injectable({

    providedIn: "root"
})
export class DbzService {

    public character: Character[] = [{
        id: v4(),
        name: "Krillin",
        power: 500
    },{
        id: v4(),
        name: "Goku",
        power: 95000
    },{
        id: v4(),
        name: "Vegueta",
        power: 78000
    },{
        id: v4(),
        name: "Gohan",
        power: 65000
    }];


    onNewCharacter(character: Character):void{

        const newCharacter: Character = { id: v4(), ...character }

       this.character.push(newCharacter);
    }

    deleteCharacterById(id: string):void{
        
        this.character = this.character.filter(val => {return val.id !== id});
    }
}