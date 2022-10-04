import { Component, Input } from '@angular/core';
// models
import { GalleryItem } from '../../models';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
})
export class GalleryItemComponent {
  animationMap: { [key: string]: boolean } = {};
  @Input() galleryItem!: GalleryItem;

  onInView(event: string) {
    this.animationMap[event] = true;
  }
}
