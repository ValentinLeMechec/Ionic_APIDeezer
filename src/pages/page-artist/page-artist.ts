import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';


/**
 * Generated class for the PageArtistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-artist',
  templateUrl: 'page-artist.html',
})
export class PageArtistPage {
  readonly TAG:string='PageArtist';

  public artist:Artist;
  public listAlbum: Album[];
  public listTrack: Track[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public deezerService: DeezerServiceProvider) {
    this.artist=this.navParams.get("theArtist");
    console.log(`artist ${JSON.stringify(this.artist)}`);
    this.listAlbum=this.navParams.get("theListAlbum");
    console.log(`liste album!! ${JSON.stringify(this.listAlbum)}`);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageArtistPage');
  }


  onClickCard(album:Album){
    console.log(`${this.TAG} IDDD: ${JSON.stringify(album.id)}`);

    this.deezerService.getTrack(album.id)
    .then((data)=>{
      this.listTrack=data;
      console.log(`${this.TAG} list des tracks: ${JSON.stringify(this.listTrack)}`);
      this.navCtrl.push('PageAlbumPage',{
        theAlbum: album,
        theListTrack: this.listTrack
          });
    })
    .catch( err=>{
      console.log(`${this.TAG} onClickCard: ${JSON.stringify}`);

    });
  }
}
