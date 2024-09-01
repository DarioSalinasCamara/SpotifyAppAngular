import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  newReleases: any [] = [];
  Bearer = 'Bearer BQDaod0MmYtnDHUJV1MvtHcqXdQ1juHjqDDLsnjuOleG72yVFtPLn9JLQUu1J3Q66lvoj8YCX1aDAcSAxU2hZ4_ufTT9LtQ7yH6Evix8zNwSrEC_Q7w';

  constructor(private http: HttpClient) { 
    
  }

  getNewRelease() {
    const headers = new HttpHeaders({
      'Authorization': this.Bearer

    });

    // this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20", { headers }).subscribe( params => console.log(params));
    return this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20", { headers })
                .pipe( map( datos => { 
                  return datos['albums'].items;

     }));
  }

  getArtista( param: string ) {
    const headers = new HttpHeaders({
      'Authorization': this.Bearer

    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ param }&type=artist`, { headers })
            .pipe( map( datos => { 
              return datos['artists'].items;
              
    }));
  }


}
