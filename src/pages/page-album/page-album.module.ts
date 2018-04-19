import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageAlbumPage } from './page-album';

@NgModule({
  declarations: [
    PageAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(PageAlbumPage),
  ],
})
export class PageAlbumPageModule {}
