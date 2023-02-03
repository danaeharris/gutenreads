import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [books, setBooks] = useState([
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
        "application/octet-stream":
          "https://www.gutenberg.org/files/45/45-0.zip",
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
  ]);

  console.log({ book: books[0] });
  return (
    <>
      <Head>
        <title>GutenReads</title>
        <meta
          name="description"
          content="A clean, beautiful interface for reading public-domain Project Gutenberg books."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-white">
        <div className="container p-4 md:p-6 lg:py-20">
          <Image
            src={logo}
            alt="GutenReads logo"
            className="w-full sm:w-[297px]"
          />
          <p className="leading-normal text-xl mt-6 font-ppwriter">
            A clean, beautiful interface for reading public-domain Project
            Gutenberg books.
          </p>
          <div className="flex flex-row items-baseline justify-start mt-4 mb-8 font-ppwriter italic">
            <span>Made with </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              className="mx-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1567 2.68916C11.8587 2.39108 11.505 2.15462 11.1156 1.9933C10.7263 1.83197 10.3089 1.74893 9.8875 1.74893C9.46605 1.74893 9.04873 1.83197 8.65937 1.9933C8.27002 2.15462 7.91627 2.39108 7.61833 2.68916L7 3.3075L6.38166 2.68916C5.77984 2.08734 4.9636 1.74924 4.1125 1.74924C3.2614 1.74924 2.44515 2.08734 1.84333 2.68916C1.24151 3.29098 0.903412 4.10723 0.903412 4.95833C0.903412 5.80943 1.24151 6.62568 1.84333 7.2275L2.46166 7.84583L7 12.3842L11.5383 7.84583L12.1567 7.2275C12.4547 6.92956 12.6912 6.5758 12.8525 6.18645C13.0139 5.7971 13.0969 5.37978 13.0969 4.95833C13.0969 4.53688 13.0139 4.11956 12.8525 3.73021C12.6912 3.34086 12.4547 2.9871 12.1567 2.68916Z"
                stroke="black"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>by Danae Harris</span>
          </div>
          <div className="py-4">
            <h5 className="text-xl pb-4 font-normal">
              A few recommendations . . .
            </h5>
            <div>
              {books.map((book) => (
                <div
                  key={book.id}
                  className="flex flex-row items-start justify-start bg-gray-100 border border-gray-200 p-4 mb-4"
                >
                  {book.formats && book.formats["image/jpeg"] ? (
                    <Image
                      src={book.formats["image/jpeg"]}
                      alt={`${book.title} cover art`}
                      height={150}
                      width={100}
                      className="w-auto mr-6"
                    />
                  ) : null}
                  <div>
                    <h3 className="text-3xl">{book.title}</h3>
                    <p className="text-md ">by {book.authors[0].name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
