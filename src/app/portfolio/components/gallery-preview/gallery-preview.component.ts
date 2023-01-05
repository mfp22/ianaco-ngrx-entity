import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnInit,
} from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
// models
import { GalleryItem } from '../../models';

@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.scss'],
})
export class GalleryPreviewComponent implements OnInit {
  activeIndex = 0;
  activeGalleryItem!: GalleryItem;
  @ViewChild('nav') ds: DragScrollComponent | undefined;
  @Input() gallery!: GalleryItem[];
  @Output() handleView = new EventEmitter<GalleryItem>();

  ngOnInit() {
    this.setActiveGalleryItem();
  }

  onSelect(index: number) {
    this.activeIndex = index;
    this.ds?.moveTo(index);
    this.setActiveGalleryItem();
  }

  moveLeft() {
    this.ds?.moveLeft();
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.setActiveGalleryItem();
    }
  }

  moveRight() {
    this.ds?.moveRight();
    if (this.activeIndex < this.gallery.length - 1) {
      this.activeIndex++;
      this.setActiveGalleryItem();
    }
  }

  /**
   * set active gallery item
   */
  setActiveGalleryItem() {
    this.activeGalleryItem = this.gallery[this.activeIndex];
    this.handleView.emit(this.activeGalleryItem);
  }
}
