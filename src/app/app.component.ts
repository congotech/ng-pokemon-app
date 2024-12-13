import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemeon-type-color.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, 
    BorderCardDirective, DatePipe, 
    UpperCasePipe, PokemonTypeColorPipe
  ],
  templateUrl:'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined

  ngOnInit(): void {
      //console.table(this.pokemonList)
      //this.selectPokemon(this.pokemonList[0])
  }

  selectPokemon(pokemonId: string){
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == Number(pokemonId));
    if(pokemon){
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
    this.pokemonSelected = pokemon;
    } else{
    console.log(`Vous avez cliqué sur le pokemon qui n'existe pas dans le tableau`);
    this.pokemonSelected = pokemon;
    }
  }
}
