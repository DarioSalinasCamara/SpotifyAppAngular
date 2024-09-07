import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  nuevasCanciones: any [] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService ) {

    this.loading = true;
  
    console.log("Init SpotifyService"); 
       this.spotify.getNewRelease()
           .subscribe( (datos:any) => {
              this.nuevasCanciones = datos;
              this.loading = false;
           });

   }

  ngOnInit(){

  }

}
