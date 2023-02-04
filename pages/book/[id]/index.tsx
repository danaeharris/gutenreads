import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import Footer from "@/components/AppFooter";
import { Book, Author } from "@/utils/types";
import bookData from "@/utils/bookData";
import Link from "next/link";

import { useRouter } from "next/router";
import Home from "../..";

export default function BookModal() {
  const router = useRouter();
  const { id } = router.query;

  const book = bookData.find((book) => book.id === parseInt(id as string));

  if (!book) {
    return null;
  }
  // Add class to body to prevent scrolling
  useEffect(() => {
    document.querySelector("body")?.classList.add("overflow-y-hidden");
    document.querySelector("body")?.classList.add("fixed");
  }, []);

  // useEffect(() => {
  // call the api
  // fetch(`https://gutendex.com/books/${id}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setBook(data);
  // });
  // }, []);

  return (
    <>
      <Head>
        <title>GutenReads | {book.title}</title>
      </Head>
      <Home />
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <button
            className="fixed z-11 inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={() => {
              document
                .querySelector("body")
                ?.classList.remove("overflow-y-hidden");
              document.querySelector("body")?.classList.remove("fixed");
              router.back();
            }}
          ></button>
          <div className="flex min-h-full w-full min-w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl md:max-w-4xl 2xl:max-w-5xl">
              <div className="bg-white relative px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {book.formats && book.formats["image/jpeg"] ? (
                      <Image
                        src={book.formats["image/jpeg"]}
                        alt={`${book.title} cover art`}
                        width={100}
                        height={150}
                        className="fill object-contain w-auto min-h-[100px] min-w-[150px]"
                      />
                    ) : null}
                    <h3
                      className="text-lg font-medium leading-6 my-4"
                      id="modal-title"
                    >
                      {book.title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm">
                        by{" "}
                        {book.authors.map((author: Author) => (
                          <span key={author.name}>
                            {author.name}
                            {book.authors.length > 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>
                    </div>
                    {book.subjects ? (
                      <div className="flex flex-row flex-wrap items-center justify-start mt-4 -mx-2">
                        {book.subjects.map((subject) => {
                          let tag = subject.split(" -- ")[0];
                          return (
                            <p
                              className="text-sm bg-gray-200 border border-gray-300 py-1 px-4 my-2 mx-2 rounded-lg"
                              key={tag}
                            >
                              {tag}
                            </p>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:flex-row sm:px-6">
                <Link
                  href={`/book/${book.id}/read`}
                  type="button"
                  className="flex w-full justify-center items-center rounded-md border-2 border-transparent bg-black px-4 py-2 font-3xl font-medium text-white shadow-sm hover:bg-white  hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black-500 sm:w-auto sm:text-sm"
                >
                  <svg
                    className="mr-2 stroke-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                  <span className="m-0">Start Reading</span>
                </Link>

                <Link href="/" type="button" className="m-3 inline-flex">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
