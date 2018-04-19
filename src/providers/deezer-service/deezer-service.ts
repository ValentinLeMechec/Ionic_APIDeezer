import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DeezerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeezerServiceProvider {

  readonly TAG:string='deezerServiceProvider';

  constructor(public http: HttpClient) {
    console.log('Hello DeezerServiceProvider Provider');
  }

  getArtist(name:string):Promise<Artist[]>{
    return new Promise<Artist[]>(resolve =>{
      let headers: HttpHeaders= new HttpHeaders();
      headers.append('Accept', 'application/json');
      const url:string='https://api.deezer.com/search/artist?q='+encodeURI(name);

      this.http.get(url, {headers: headers}).subscribe(data =>{
        let json: DataSearchArtists= data as DataSearchArtists;
        resolve(json.data);
      }, err =>{
          console.log(err);
      });
    });

  }

  getAlbum(name:string):Promise<Album[]>{
    return new Promise<Album[]>(resolve =>{
      let headers: HttpHeaders= new HttpHeaders();
      headers.append('Accept', 'application/json');
      const url:string='https://api.deezer.com/search/album?q='+encodeURI(name);

      this.http.get(url, {headers: headers}).subscribe(data =>{
        let json: ListAlbum= data as ListAlbum;
        resolve(json.data);
      }, err =>{
          console.log(err);
      });
    });

  }

  getTrack(id:number):Promise<Track[]>{
    return new Promise<Track[]>(resolve =>{
      let headers: HttpHeaders= new HttpHeaders();
      headers.append('Accept', 'application/json');
      const url:string='https://api.deezer.com/album/'+id+'/tracks';

      this.http.get(url, {headers: headers}).subscribe(data =>{
        let json: ListTrack= data as ListTrack;
        resolve(json.data);
      }, err =>{
          console.log(err);
      });
    });
  }

}
