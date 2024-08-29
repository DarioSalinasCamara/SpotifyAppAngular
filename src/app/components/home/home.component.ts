import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  

  constructor(private spotify: SpotifyService ) {
  
    console.log("Init SpotifyService"); 
       spotify.getNewRelease();

   }

  ngOnInit(){

  }

}
