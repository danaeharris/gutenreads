export type Book = {
  id: number;
  title: string;
  authors: Author[];
  translators: any;
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {
    [key: string]: string;
  };
  download_count: number;
  file: string;
  gradientColor: { r: number; g: number; b: number };
};

export type Author = {
  name: string;
  birth_year: number;
  death_year: number;
};
