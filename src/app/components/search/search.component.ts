import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  artistas: any [] = [];

  constructor( private spotifyService: SpotifyService){

  }

  buscarArtista( param: string ){
    
    this.spotifyService.getArtista(param).subscribe( (artistasPeticion: any) => {
  
      this.artistas = artistasPeticion;
      console.log(this.artistas);
    
    });
  }

}
