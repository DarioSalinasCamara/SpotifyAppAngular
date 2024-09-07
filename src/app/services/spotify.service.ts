import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  newReleases: any [] = [];
  Bearer = 'Bearer BQA5jkZ4SFfu7Of2NPlXuPTZly5NN3k9JYDfWsYx3_VnlUpi5p0D9M0hBogi_mQnhzMe-G7WNpa8Paspqkq6Es8ilP55WOxwnNj3k_54MkDWBtggrCM';

  constructor(private http: HttpClient) { 
    
  }

  getQuery( query: string){


    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': this.Bearer
    });

    return this.http.get(url, { headers });

  }

  getNewRelease() {
    
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( datos => { return datos['albums'].items;
      

      // this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20", { headers }).subscribe( params => console.log(params));
      // this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20", { headers })
      //             .pipe( map( datos => { 
      //               return datos['albums'].items;
      //  }));
    }));
  }

  getArtistas( param: string ) {
  
    return this.getQuery(`search?q=${ param }&type=artist&limit=15`)
    .pipe( map( datos => { return datos['artists'].items;


      // return this.http.get(`https://api.spotify.com/v1/search?q=${ param }&type=artist`, { headers })
      //         .pipe( map( datos => { 
      //           return datos['artists'].items;        
      // }));
    }));
  }

  getArtista( id: string ) {
    
    return this.getQuery(`artists/${ id }`);
               
    
  }

  getTopTracks( id: string ) {
    
    return this.getQuery(`artists/${ id }/top-tracks`)
                 .pipe( map( datos => datos['tracks']));
               
  }
}
