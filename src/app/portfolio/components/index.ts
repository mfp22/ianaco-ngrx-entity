// imports
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { GalleryPreviewComponent } from './gallery-preview/gallery-preview.component';
// exports
export * from './gallery-item/gallery-item.component';
export * from './color-palette/color-palette.component';
export * from './gallery-preview/gallery-preview.component';
// exports group
export const components = [
  GalleryItemComponent,
  GalleryPreviewComponent,
  ColorPaletteComponent,
];
