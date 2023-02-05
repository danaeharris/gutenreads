import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/logo.png";
import Footer from "@/components/AppFooter";
import { useRouter } from "next/router";
import bookData from "@/utils/bookData";
import styles from "./read.module.css";
import { Author } from "@/utils/types";

export default function ReaderView() {
  const router = useRouter();
  const { id } = router.query;

  const book = bookData.find((book) => book.id === parseInt(id as string));
  const bookHtml = book?.file;

  useEffect(() => {
    console.log(router.query);
  }, [router.query]);

  if (!book || !bookHtml) {
    return null;
  }
  return (
    <>
      <Head>
        <title>GutenReads | Read {book.title}</title>
        <meta
          name="description"
          content="A clean, beautiful interface for reading public-domain Project Gutenberg books."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="min-h-screen h-full"
        style={{
          background: `linear-gradient(180deg, ${book.gradientColor} 0%, rgba(255,255,255,1) 350px)`,
        }}
      >
        <div className="container py-4 md:py-6 lg:py-20 flex flex-col items-center justify-start">
          <Image
            src={`/books/${book.title
              .replaceAll(" ", "-")
              .replaceAll(",", "")
              .toLowerCase()}.png`}
            alt={`${book.title} cover art`}
            width={420}
            height={223}
          />
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center pb-5">
              {book.title}
            </h1>
            <p className="text-md font-ppwriter pb-16">
              by{" "}
              {book.authors.map((author: Author) => (
                <span key={author.name}>
                  {author.name}
                  {book.authors.length > 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
          {/* Normally we wouldn't do this, but we pulled these books from Project Gutenberg, so we know they're safe */}
          <div
            dangerouslySetInnerHTML={{ __html: bookHtml }}
            className={styles.reader}
          ></div>
        </div>
      </div>
    </>
  );
}
