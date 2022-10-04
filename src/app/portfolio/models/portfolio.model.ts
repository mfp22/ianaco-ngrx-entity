export interface Branding {
  colorPalette: string[];
  typography: string;
}

export type GalleryItem = {
  name: string;
  role: string;
  description: string;
  branding: Branding;
  primaryImage: string;
  secondaryImage: string;
  mobileImages: string[];
};

export interface Portfolio {
  gallery: GalleryItem[];
}
