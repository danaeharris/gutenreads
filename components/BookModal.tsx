import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import { Book, Author } from "@/utils/types";
import bookData from "@/utils/bookData";
import Link from "next/link";
import Modal from "react-modal";
import BookSubjects from "@/components/BookSubjects";
import BookAuthors from "./BookAuthors";

export default function BookModal({
  isOpen,
  closeModal,
  book,
}: {
  isOpen: boolean;
  closeModal: () => void;
  book: Book;
}) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-white opacity-75" />}
      <Modal
        closeTimeoutMS={500}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            cursor: "pointer",
            backgroundColor: `rgba(${book.gradientColor.r}, ${book.gradientColor.g}, ${book.gradientColor.b}, 0.30)`,
            backdropFilter: "blur(3px)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            padding: 0,
            paddingTop: 30,
            border: "none",
          },
        }}
        contentLabel="Book Modal"
      >
        <div className="relative transform bg-white sm:rounded-lg text-left shadow-xl transition-all w-full h-full sm:h-auto sm:my-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl cursor-default">
          <div
            className="bg-white relative px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col items-between justify-between h-full sm:h-auto sm:rounded-lg"
            style={{
              background: `linear-gradient(180deg, rgba(${book.gradientColor.r}, ${book.gradientColor.g}, ${book.gradientColor.b}, 0.2) 0%, rgba(255,255,255,1) 200px)`,
              boxShadow: `0px 0px 15px rgba(${book.gradientColor.r}, ${book.gradientColor.g}, ${book.gradientColor.b}, 0.2)`,
            }}
          >
            <button
              className="absolute top-2 right-2 sm:hidden cursor-pointer"
              onClick={() => closeModal()}
            >
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="flex flex-col items-center sm:w-[70%] mx-auto sm:-mt-20">
              {/* <div className="sm:mt-0 flex items-center w-full text-center"> */}
              <Image
                className=""
                src={`/books/${book.title
                  .replaceAll(" ", "-")
                  .replaceAll(",", "")
                  .toLowerCase()}.png`}
                alt={`${book.title} cover art`}
                width={420}
                height={223}
              />
              <h3 className="text-3xl font-bold mt-4" id="modal-title">
                {book.title}
              </h3>
              <div className="mt-2">
                <p className="text-sm">
                  by <BookAuthors authors={book.authors} />
                </p>
              </div>
              <BookSubjects subjects={book.subjects} align="center" />
              <div className="p-4"></div>
            </div>
            <div className="py-3 flex flex-col items-center sm:px-4">
              <Link
                href={`/book/${book.id}/read`}
                onClick={() => {
                  closeModal();
                }}
                type="button"
                className="flex justify-center items-center rounded-md border-2 border-transparent bg-black px-4 py-2 font-3xl font-medium text-white shadow-sm transition duration-300 hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black-500 w-min sm:text-sm"
              >
                <svg
                  className="mr-2 stroke-current"
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
                <span className="m-0">Start&nbsp;Reading</span>
              </Link>
              <div className="flex flex-col sm:flex-row lg:w-1/2 items-center justify-center  sm:justify-between pt-10">
                <p className="m-3x font-medium m-6">
                  Downloads:{" "}
                  {book.download_count > 999
                    ? `${Math.ceil(book.download_count / 1000)}k`
                    : book.download_count}
                </p>
                <a
                  href={`https://www.gutenberg.org/ebooks/${book.id}`}
                  type="button"
                  className="m-6 flex flex-row items-center justify-center underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Gutenberg
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="ml-2 stroke-current"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Open in a new tab icon</title>
                    <path
                      d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                      stroke="black"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 2.5H17.5V7.5"
                      stroke="black"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33337 11.6667L17.5 2.5"
                      stroke="black"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
