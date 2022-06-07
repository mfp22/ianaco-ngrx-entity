import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
// models
import { Gallery } from '../../models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnChanges {
  selectedImage: string | undefined;
  @Input() gallery: Gallery | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gallery']) {
      this.selectedImage = this.gallery?.images[0];
      console.log('get', this.selectedImage, this.gallery);
    }
  }

  onSelectImage(image: string) {
    this.selectedImage = image;
  }
}
