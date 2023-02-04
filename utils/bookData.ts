import { Book } from "./types";

const bookData: Book[] = [
  {
    id: 1342,
    title: "Pride and Prejudice",
    authors: [
      {
        name: "Austen, Jane",
        birth_year: 1775,
        death_year: 1817,
      },
    ],
    translators: [],
    subjects: [
      "Courtship -- Fiction",
      "Domestic fiction",
      "England -- Fiction",
      "Love stories",
      "Sisters -- Fiction",
      "Social classes -- Fiction",
      "Young women -- Fiction",
    ],
    bookshelves: ["Best Books Ever Listings", "Harvard Classics"],
    languages: ["en"],
    copyright: false,
    media_type: "Text",
    formats: {
      "application/octet-stream":
        "https://www.gutenberg.org/files/1342/1342-0.zip",
      "text/plain; charset=us-ascii":
        "https://www.gutenberg.org/files/1342/1342-0.txt",
      "text/plain": "https://www.gutenberg.org/ebooks/1342.txt.utf-8",
      "application/x-mobipocket-ebook":
        "https://www.gutenberg.org/ebooks/1342.kf8.images",
      "application/epub+zip":
        "https://www.gutenberg.org/ebooks/1342.epub3.images",
      "image/jpeg":
        "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
      "text/html": "https://www.gutenberg.org/ebooks/1342.html.images",
      "application/rdf+xml": "https://www.gutenberg.org/ebooks/1342.rdf",
    },
    download_count: 57315,
  },
  {
    id: 64317,
    title: "The Great Gatsby",
    authors: [
      {
        name: "Fitzgerald, F. Scott (Francis Scott)",
        birth_year: 1896,
        death_year: 1940,
      },
    ],
    translators: [],
    subjects: [
      "First loves -- Fiction",
      "Long Island (N.Y.) -- Fiction",
      "Married women -- Fiction",
      "Psychological fiction",
      "Rich people -- Fiction",
    ],
    bookshelves: [],
    languages: ["en"],
    copyright: false,
    media_type: "Text",
    formats: {
      "application/x-mobipocket-ebook":
        "https://www.gutenberg.org/ebooks/64317.kf8.images",
      "application/epub+zip":
        "https://www.gutenberg.org/ebooks/64317.epub3.images",
      "text/html": "https://www.gutenberg.org/ebooks/64317.html.images",
      "image/jpeg":
        "https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg",
      "application/octet-stream":
        "https://www.gutenberg.org/files/64317/64317-0.zip",
      "text/plain": "https://www.gutenberg.org/ebooks/64317.txt.utf-8",
      "text/plain; charset=us-ascii":
        "https://www.gutenberg.org/files/64317/64317-0.txt",
      "application/rdf+xml": "https://www.gutenberg.org/ebooks/64317.rdf",
    },
    download_count: 20487,
  },
  {
    id: 45,
    title: "Anne of Green Gables",
    authors: [
      {
        name: "Montgomery, L. M. (Lucy Maud)",
        birth_year: 1874,
        death_year: 1942,
      },
    ],
    translators: [],
    subjects: [
      "Bildungsromans",
      "Canada -- History -- 1867-1914 -- Fiction",
      "Country life -- Prince Edward Island -- Fiction",
      "Friendship -- Fiction",
      "Girls -- Fiction",
      "Islands -- Fiction",
      "Orphans -- Fiction",
      "Prince Edward Island -- History -- 20th century -- Fiction",
      "Shirley, Anne (Fictitious character) -- Fiction",
    ],
    bookshelves: ["Canada", "Children's Literature"],
    languages: ["en"],
    copyright: false,
    media_type: "Text",
    formats: {
      "application/x-mobipocket-ebook":
        "https://www.gutenberg.org/ebooks/45.kf8.images",
      "application/epub+zip":
        "https://www.gutenberg.org/ebooks/45.epub3.images",
      "text/html": "https://www.gutenberg.org/ebooks/45.html.images",
      "image/jpeg":
        "https://www.gutenberg.org/cache/epub/45/pg45.cover.medium.jpg",
      "application/octet-stream": "https://www.gutenberg.org/files/45/45-0.zip",
      "text/plain": "https://www.gutenberg.org/ebooks/45.txt.utf-8",
      "text/plain; charset=us-ascii":
        "https://www.gutenberg.org/files/45/45-0.txt",
      "application/rdf+xml": "https://www.gutenberg.org/ebooks/45.rdf",
    },
    download_count: 9192,
  },
  {
    id: 2488,
    title:
      "Twenty Thousand Leagues Under the Seas: An Underwater Tour of the World",
    authors: [
      {
        name: "Verne, Jules",
        birth_year: 1828,
        death_year: 1905,
      },
    ],
    translators: [
      {
        name: "Walter, Frederick Paul",
        birth_year: 1943,
        death_year: null,
      },
    ],
    subjects: [
      "Adventure stories",
      "Science fiction",
      "Sea stories",
      "Submarines (Ships) -- Fiction",
      "Underwater exploration -- Fiction",
    ],
    bookshelves: ["Movie Books", "Science Fiction"],
    languages: ["en"],
    copyright: true,
    media_type: "Text",
    formats: {
      "application/x-mobipocket-ebook":
        "https://www.gutenberg.org/ebooks/2488.kf8.images",
      "application/epub+zip":
        "https://www.gutenberg.org/ebooks/2488.epub3.images",
      "text/html; charset=utf-8":
        "https://www.gutenberg.org/files/2488/2488-h/2488-h.htm",
      "image/jpeg":
        "https://www.gutenberg.org/cache/epub/2488/pg2488.cover.medium.jpg",
      "text/html": "https://www.gutenberg.org/ebooks/2488.html.images",
      "text/plain; charset=utf-8":
        "https://www.gutenberg.org/files/2488/2488-0.txt",
      "application/rdf+xml": "https://www.gutenberg.org/ebooks/2488.rdf",
    },
    download_count: 844,
  },
  {
    id: 55,
    title: "The Wonderful Wizard of Oz",
    authors: [
      {
        name: "Baum, L. Frank (Lyman Frank)",
        birth_year: 1856,
        death_year: 1919,
      },
    ],
    translators: [],
    subjects: [
      "Courage -- Juvenile fiction",
      "Cowardly Lion (Fictitious character) -- Juvenile fiction",
      "Cyclones -- Juvenile fiction",
      "Dreams -- Juvenile fiction",
      "Fantasy literature",
      "Gale, Dorothy (Fictitious character) -- Juvenile fiction",
      "Good and evil -- Juvenile fiction",
      "Home -- Juvenile fiction",
      "Oz (Imaginary place) -- Juvenile fiction",
      "Scarecrow (Fictitious character from Baum) -- Juvenile fiction",
      "Tin Woodman (Fictitious character) -- Juvenile fiction",
      "Toto (Fictitious character) -- Juvenile fiction",
      "Witches -- Juvenile fiction",
      "Wizard of Oz (Fictitious character) -- Juvenile fiction",
    ],
    bookshelves: ["Children's Literature", "Fantasy"],
    languages: ["en"],
    copyright: false,
    media_type: "Text",
    formats: {
      "application/x-mobipocket-ebook":
        "https://www.gutenberg.org/ebooks/55.kf8.images",
      "application/epub+zip":
        "https://www.gutenberg.org/ebooks/55.epub3.images",
      "image/jpeg":
        "https://www.gutenberg.org/cache/epub/55/pg55.cover.medium.jpg",
      "text/html; charset=utf-8":
        "https://www.gutenberg.org/files/55/55-h/55-h.htm",
      "text/html": "https://www.gutenberg.org/ebooks/55.html.images",
      "text/plain; charset=utf-8":
        "https://www.gutenberg.org/files/55/55-0.txt",
      "application/rdf+xml": "https://www.gutenberg.org/ebooks/55.rdf",
    },
    download_count: 7558,
  },
];

export default bookData;
