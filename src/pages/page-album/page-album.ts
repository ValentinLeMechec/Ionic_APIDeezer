import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

/**
 * Generated class for the PageAlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-album',
  templateUrl: 'page-album.html',
})
export class PageAlbumPage {

  public album:Album;
  public listTrack: Track[];
  readonly TAG:string='PageAlbum';

  constructor(public navCtrl: NavController, public navParams: NavParams, public deezerService: DeezerServiceProvider) {
    this.album=this.navParams.get("theAlbum");
    console.log(`${this.TAG}album${JSON.stringify(this.album)}`);
    this.listTrack=this.navParams.get("theListTrack");
    console.log(`${this.TAG}list des tracks ${JSON.stringify(this.listTrack)}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAlbumPage');
  }

 

}
