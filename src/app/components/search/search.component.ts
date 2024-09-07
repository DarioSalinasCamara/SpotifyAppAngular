import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  artistas: any [] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService){

    this.loading = false;

  }

  buscarArtista( param: string ){
    this.loading = true;
    this.spotifyService.getArtistas(param).subscribe( (artistasPeticion: any) => {
  
      this.artistas = artistasPeticion;
      console.log(this.artistas);
      this.loading = false;
    });
  }

}
