export interface Branding {
  colorPalette: string[];
  typography: string;
}

export interface MobilImage {
  desc: string;
  image: string;
  fallbackImage: string;
}

export type GalleryItem = {
  name: string;
  role: string;
  description: string;
  branding: Branding;
  previewImage: string;
  fallbackPreviewImage: string;
  primaryImage: string;
  desktopImage: string;
  fallbackDesktopImage: string;
  mobileImages: MobilImage[];
};

export interface Portfolio {
  gallery: GalleryItem[];
}
