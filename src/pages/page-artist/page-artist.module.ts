import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageArtistPage } from './page-artist';

@NgModule({
  declarations: [
    PageArtistPage,
  ],
  imports: [
    IonicPageModule.forChild(PageArtistPage),
  ],
})
export class PageArtistPageModule {}
