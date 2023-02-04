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
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle: any;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    </>
  );
}
