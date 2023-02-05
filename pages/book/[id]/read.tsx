import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import bookData from "@/utils/bookData";
import styles from "./read.module.css";
import { Author } from "@/utils/types";

const getBookFromId = (id: string) => {
  return bookData.find((book) => book.id === parseInt(id as string));
};

export default function ReaderView() {
  const router = useRouter();
  const { id } = router.query;

  const [totalHours, setTotalHours] = useState(0);
  const [percentageDone, setPercentageDone] = useState(0);
  const hoursLeft = Math.ceil(totalHours * ((100 - percentageDone ?? 0) / 100));

  const book = getBookFromId(id as string);
  const bookHtml = book?.file;

  useEffect(() => {
    // Once bookHtml is ready (router.query is ready)
    if (bookHtml) {
      console.log("bookHTML is ready");
      // Initialize totalHours.
      let numWords = bookHtml?.split(" ").length;
      const newTotalHours = Math.ceil((numWords ?? 0) / 18000);
      console.log({ newTotalHours });
      setTotalHours(newTotalHours);

      // Set up the scroll handler.
      const onScroll = () => {
        const el = document.documentElement,
          ScrollTop = el.scrollTop || document.body.scrollTop,
          ScrollHeight = el.scrollHeight || document.body.scrollHeight;
        let percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
        percent = Math.floor(percent);

        // Store the new hours left and percentage read.
        setPercentageDone(percent);
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [!!bookHtml]);

  if (!book || !bookHtml) {
    return null;
  }

  return (
    <>
      <Head>
        <title>GutenReads | Read {book.title}</title>
      </Head>
      <div
        className="min-h-screen h-full"
        style={{
          background: `linear-gradient(180deg, rgba(${book.gradientColor.r}, ${book.gradientColor.g}, ${book.gradientColor.b}, 0.5) 0%, rgba(255,255,255,1) 350px)`,
        }}
      >
        <div
          className="fixed top-0 left-0 right-0 bg-white flex flex-row items-stretch justify-between"
          style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
        >
          <button onClick={() => router.back()} className="p-4 sm:px-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Back Button</title>
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="border-x border-gray-150 py-2 px-6 hidden sm:flex sm:flex-row ">
            {book.formats && book.formats["image/jpeg"] ? (
              <Image
                src={book.formats["image/jpeg"]}
                alt={`${book.title} cover art`}
                width={100}
                height={150}
                className="fill object-contain w-auto h-[52px] min-w-[36px] mr-3"
                style={{
                  filter: "drop-shadow(4px 8px 15px rgba(0, 0, 0, 0.25))",
                }}
              />
            ) : null}
            <div className="flex flex-col items-start justify-center">
              <h5 className="text-md font-normal font-inter">{book.title}</h5>
              <p className="text-sm font-inter">
                by{" "}
                {book.authors.map((author: Author) => (
                  <span key={author.name}>
                    {`${author.name.split(",")[1].split("(")[0]} ${
                      author.name.split(",")[0].split("(")[0]
                    }`}
                    {book.authors.length > 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="py-2 px-4 sm:px-6 h-full border-x border-gray-150 sm:border-none flex flex-row items-center justify-start self-center flex-1">
            <svg
              className="mr-4 stroke-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Open Book Icon</title>
              <path
                d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col w-full">
              <p className="mb-1">
                Progress {percentageDone}% {hoursLeft} hours left
              </p>
              <div className="w-full h-1.5 bg-gray-150 rounded-full">
                <div
                  className="h-full bg-gray-900 rounded-full"
                  style={{ width: `${percentageDone}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col align-center justify-center py-2 px-4 sm:px-6 border-transparent sm:border-l sm:border-gray-150">
            <p className="font-ppwriter text-2xl">Aa</p>
          </div>
        </div>
        {/* page */}
        <div className="container py-24 md:py-32 lg:py-32 flex flex-col items-center justify-start">
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
            <p className="text-md font-ppwriter pb-10 md:pb-16">
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
