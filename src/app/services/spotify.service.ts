import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  newReleases: any [] = [];

  constructor(private http: HttpClient) { 
    
  }

  getNewRelease() {
  
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDBq49_U8CMZOxf5N9_gTSUsw7BtNP99QtqM3JcHhc6tpIuCPAGNec89VhwT97NUdYRxgrWMii7DQpB68TgnXwcQbSMEjKxKSkiqFU5phsX6GXeruc'

    });

    this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20", { headers })
        .subscribe( newReleases => {
          console.log(newReleases);
        });
  }
}
