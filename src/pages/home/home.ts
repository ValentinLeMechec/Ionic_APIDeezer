import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  readonly TAG:string='HomePage';
  listArtist: Artist[];
  listAlbum: Album[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public deezerService: DeezerServiceProvider) {

  }

  onSearchArtist(ev:any){
    let val=ev.target.value;
    console.log(`${this.TAG} val: ${val}`);
    this.deezerService.getArtist(val)
    .then((data)=>{
      this.listArtist=data;
      console.log(`${this.TAG} listArtist: ${JSON.stringify(this.listArtist)}`);

    })
    .catch( err=>{
      console.log(`${this.TAG} onSearchArtist: ${JSON.stringify}`);

    });
  }

  onClickCard(artist:Artist){
    this.deezerService.getAlbum(artist.name)
    .then((data)=>{
      this.listAlbum=data;
      console.log(`${this.TAG} listAlbum: ${JSON.stringify(this.listAlbum)}`);
      this.navCtrl.push('PageArtistPage',{
      theArtist: artist,
      theListAlbum: this.listAlbum
    });
    })
    .catch( err=>{
      console.log(`${this.TAG} onClickCard: ${JSON.stringify}`);

    });
    

  }
  
}
