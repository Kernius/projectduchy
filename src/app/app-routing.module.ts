import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContentColumnComponent } from './content-column/content-column.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'content-column', component: ContentColumnComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
