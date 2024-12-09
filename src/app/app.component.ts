import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Welcome to {{pokemons[1]}}</h1>`,
  styles: [],
})
export class AppComponent {
  pokemons = ['Bulbizarre', 'Salamèche', 'Carapuce'];
}
