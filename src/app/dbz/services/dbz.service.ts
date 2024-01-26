

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name:'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character):void {

    const newCharacter: Character = { id: uuid(), ...character }; // ...character --> toma todas sus propiedades y espárcelas sobre este nuevo objeto que estoy creando

    this.characters.push(newCharacter);
  }

  //onDeleteCharacter( index: number ) {
  //  this.characters.splice(index, 1);
  deleteCharacterById( id: string ){
    this.characters = this.characters.filter( character => character.id !== id);
  }


}
