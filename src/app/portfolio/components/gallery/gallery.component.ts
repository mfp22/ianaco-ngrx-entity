import { Component, Input } from '@angular/core';
// models
import { Gallery } from '../../models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  animationMap: { [key: string]: boolean } = {};
  @Input() gallery: Gallery | undefined;

  onInView(event: string) {
    this.animationMap[event] = true;
  }
}
