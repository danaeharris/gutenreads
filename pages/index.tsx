import Image from "next/image";
import { useState } from "react";
import logo from "../public/logo.png";
import { Book } from "@/utils/types";
import bookData from "@/utils/bookData";
import Modal from "react-modal";
import BookSubjects from "@/components/BookSubjects";
import BookModal from "@/components/BookModal";
import BookAuthors from "@/components/BookAuthors";
import useHideOverflow from "@/hooks/useHideOverflow";

Modal.setAppElement("#app");

export default function Home() {
  const [books, setBooks] = useState<Book[]>(
    bookData.sort((a, b) => (a.title > b.title ? 1 : -1))
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState<any>();

  function openModal(book: Book) {
    setCurrentBook(book);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    // setCurrentBook(null);
  }

  return (
    <>
      <div
        className="container mx-auto py-4 md:py-6 lg:py-20 relative"
        id="container"
      >
        {/* Add the Modal and pass the state it needs. */}
        <BookModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          book={currentBook}
        />
        <Image
          src={logo}
          alt="GutenReads logo"
          className="w-[150px] md:w-[297px]"
        />
        <p className="leading-normal text-xl mt-4 md:mt-6 font-ppwriter">
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
          <div className="sm:-mx-4">
            {books.map((book, index) => (
              <button
                // href={`/book/${book.id}`}
                onClick={() => openModal(book)}
                key={book.id}
                className="flex flex-col md:flex-row items-start md:items-center text-left justify-start transition duration-500 border border-transparent hover:bg-gray-100 hover:border-transparent p-4 mb-4 w-full"
              >
                {book.formats && book.formats["image/jpeg"] ? (
                  <Image
                    src={book.formats["image/jpeg"]}
                    alt={`${book.title} cover art`}
                    width={100}
                    height={150}
                    className="fill object-contain w-auto max-w-[133px]"
                  />
                ) : null}
                <div className="pt-6 md:px-6 md:pt-0">
                  <h3 className="text-2xl md:text-3xl">{book.title}</h3>
                  <p className="text-md">
                    by <BookAuthors authors={book.authors} />
                  </p>
                  <BookSubjects subjects={book.subjects} max={5} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
