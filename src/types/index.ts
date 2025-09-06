export interface Monastery {
  id: string;
  name: string;
  lat: number;
  lng: number;
  short: string;
  description: string;
  history: string;
  year: string;
  sect: string;
  howToReach: string;
  images: string[];
  panorama: string;
  thumbnail: string;
}

export interface CulturalEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  monastery?: string;
  type: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  year: string;
  type: string;
  thumbnail: string;
  description: string;
  monastery: string;
}

export interface Language {
  code: 'en' | 'ne';
  name: string;
}

export interface Translations {
  en: Record<string, string>;
  ne: Record<string, string>;
}