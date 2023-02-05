import { Book } from "./types";

import anneOfGreenGables from "../components/bookHtml/AnneOfGreenGables";
import countOfMonteCristo from "../components/bookHtml/CountOfMonteCristo";
import greatGatsby from "../components/bookHtml/GreatGatsby";
import prideAndPrejudiceHtml from "../components/bookHtml/PrideAndPrejudice";

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
    file: prideAndPrejudiceHtml,
    gradientColor: { r: 54, g: 61, b: 20 },
  },
  {
    id: 1184,
    title: "The Count of Monte Cristo",
    authors: [
      {
        name: "Dumas, Alexandre",
        birth_year: 1802,
        death_year: 1870,
      },
    ],
    translators: [],
    subjects: [
      "Adventure stories",
      "Dantès, Edmond (Fictitious character) -- Fiction",
      "France -- History -- 19th century -- Fiction",
      "Historical fiction",
      "Pirates -- Fiction",
      "Prisoners -- Fiction",
      "Revenge -- Fiction",
    ],
    bookshelves: ["Adventure", "Movie Books"],
    languages: ["en"],
    copyright: false,
    media_type: "Text",
    formats: {
      "application/x-mobipocket-ebook":
        "https://www.gutenberg.org/ebooks/1184.kf8.images",
      "text/html": "https://www.gutenberg.org/ebooks/1184.html.images",
      "application/epub+zip":
        "https://www.gutenberg.org/ebooks/1184.epub3.images",
      "application/octet-stream":
        "https://www.gutenberg.org/files/1184/1184-0.zip",
      "image/jpeg":
        "https://www.gutenberg.org/cache/epub/1184/pg1184.cover.medium.jpg",
      "text/plain": "https://www.gutenberg.org/ebooks/1184.txt.utf-8",
      "text/plain; charset=us-ascii":
        "https://www.gutenberg.org/files/1184/1184-0.txt",
      "application/rdf+xml": "https://www.gutenberg.org/ebooks/1184.rdf",
    },
    download_count: 12464,
    file: countOfMonteCristo,
    gradientColor: { r: 95, g: 89, b: 89 },
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
    file: greatGatsby,
    gradientColor: { r: 5, g: 71, b: 95 },
  },
  {
    id: 64365,
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
    bookshelves: [],
    languages: ["en"],
    copyright: false,
    media_type: "Text",
    formats: {
      "application/x-mobipocket-ebook":
        "https://www.gutenberg.org/ebooks/64365.kf8.images",
      "application/epub+zip":
        "https://www.gutenberg.org/ebooks/64365.epub3.images",
      "image/jpeg":
        "https://www.gutenberg.org/cache/epub/64365/pg64365.cover.medium.jpg",
      "text/plain; charset=utf-8":
        "https://www.gutenberg.org/files/64365/64365-0.txt",
      "text/html; charset=utf-8":
        "https://www.gutenberg.org/files/64365/64365-h/64365-h.htm",
      "text/html": "https://www.gutenberg.org/ebooks/64365.html.images",
      "application/rdf+xml": "https://www.gutenberg.org/ebooks/64365.rdf",
    },
    download_count: 290,
    file: anneOfGreenGables,
    gradientColor: { r: 90, g: 72, b: 62 },
  },
];

export default bookData;
