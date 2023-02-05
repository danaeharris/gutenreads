import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import Footer from "@/components/AppFooter";
import { Book, Author } from "@/utils/types";
import bookData from "@/utils/bookData";
import Link from "next/link";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#app");

function BookModal({
  isOpen,
  closeModal,
  book,
}: {
  isOpen: boolean;
  closeModal: () => void;
  book: Book;
}) {
  Modal.defaultStyles.overlay.backgroundColor = `rgba(${book.gradientColor.r}, ${book.gradientColor.g}, ${book.gradientColor.b}, 0.30)`;

  Modal.defaultStyles.overlay.backdropFilter = `blur(3px)`;

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-white opacity-75" />}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className="relative transform bg-white sm:rounded-lg text-left shadow-xl transition-all w-full h-full sm:h-auto sm:my-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl"
        contentLabel="Book Modal"
      >
        <div
          className="bg-white relative px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col items-between justify-between h-full sm:h-auto sm:rounded-lg"
          style={{
            background: `linear-gradient(180deg, rgba(${book.gradientColor.r}, ${book.gradientColor.g}, ${book.gradientColor.b}, 0.2) 0%, rgba(255,255,255,1) 200px)`,
            boxShadow: `0px 0px 15px rgba(${book.gradientColor.r}, ${book.gradientColor.g}, ${book.gradientColor.b}, 0.2)`,
          }}
        >
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
            <h3
              className="text-3xl font-medium leading-6 my-4"
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
              <div className="flex flex-row flex-wrap items-center justify-center mt-4 -mx-2">
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
            {/* </div> */}
          </div>
          <div className="py-3 flex flex-col items-center sm:px-4">
            <Link
              href={`/book/${book.id}/read`}
              onClick={() => {
                closeModal();
              }}
              type="button"
              className="flex justify-center items-center rounded-md border-2 border-transparent bg-black px-4 py-2 font-3xl font-medium text-white shadow-sm hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black-500 w-min sm:text-sm"
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
                Downloads{" "}
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
      </Modal>
    </>
  );
}
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
    setCurrentBook(null);
  }
  useEffect(() => {
    if (modalIsOpen) {
      document.querySelector("body")?.classList.add("overflow-y-hidden");
      document.querySelector("body")?.classList.add("fixed");
    } else {
      document.querySelector("body")?.classList.remove("overflow-y-hidden");
      document.querySelector("body")?.classList.remove("fixed");
    }
  }, [modalIsOpen]);

  return (
    <>
      <div className="container mx-auto py-4 md:py-6 lg:py-20">
        {/* Add the Modal and pass the state it needs. */}
        {currentBook ? (
          <BookModal
            isOpen={modalIsOpen}
            closeModal={closeModal}
            book={currentBook}
          />
        ) : null}
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
                className="flex flex-col md:flex-row items-start text-left justify-start border border-transparent hover:bg-gray-100 hover:border-gray-200 p-4 mb-4"
              >
                {book.formats && book.formats["image/jpeg"] ? (
                  <Image
                    src={book.formats["image/jpeg"]}
                    alt={`${book.title} cover art`}
                    width={100}
                    height={150}
                    className="fill object-contain w-auto min-h-[100px] min-w-[150px]"
                  />
                ) : null}
                <div className="pt-6 md:px-6 md:pt-0">
                  <h3 className="text-2xl md:text-3xl">{book.title}</h3>
                  <p className="text-md">
                    by{" "}
                    {book.authors.map((author: Author) => (
                      <span key={author.name}>
                        {author.name}
                        {book.authors.length > 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  {book.subjects ? (
                    <div className="flex flex-row flex-wrap items-center justify-start mt-4 -mx-2">
                      {book.subjects.slice(0, 5).map((subject) => {
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
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
