import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  nuevasCanciones: any [] = [];

  constructor(private spotify: SpotifyService ) {
  
    console.log("Init SpotifyService"); 
       this.spotify.getNewRelease()
           .subscribe( (datos:any) => {
              this.nuevasCanciones = datos;
           });

   }

  ngOnInit(){

  }

}
