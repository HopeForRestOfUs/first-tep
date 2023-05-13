import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.components.html',
    styleUrls: []
})
export class AppDbzComponent {

    constructor(
        private dbzSer: DbzService
    ){

    }

    getCharacter(): Character[]{

        return [...this.dbzSer.character];
    }

    onDeleteCharacter(id:string):void{

        this.dbzSer.deleteCharacterById(id)
    }

    newCharacter(val: Character){

        this.dbzSer.onNewCharacter(val);
    }
}