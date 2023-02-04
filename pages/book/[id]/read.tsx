import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/logo.png";
import Footer from "@/components/AppFooter";
import { useRouter } from "next/router";
import bookData from "@/utils/bookData";
import styles from "./read.module.css";

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
      <div className="container py-4 md:py-6 lg:py-20 flex flex-col items-center justify-start">
        <Image
          src={book.formats["image/jpeg"]}
          alt={`${book.title} cover art`}
          width={100}
          height={150}
          className="w-[150px] md:w-[297px]"
        />

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
        {/* Normally we wouldn't do this, but we pulled these books from Project Gutenberg, so we know they're safe */}
        <div
          dangerouslySetInnerHTML={{ __html: bookHtml }}
          className={styles.reader}
        ></div>
      </div>
    </>
  );
}
