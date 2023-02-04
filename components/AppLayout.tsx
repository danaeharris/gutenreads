import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import Footer from "@/components/AppFooter";

export type Book = {
  id: number;
  title: string;
  authors: Author[];
  translators: any;
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {
    [key: string]: string;
  };
  download_count: number;
};

export type Author = {
  name: string;
  birth_year: number;
  death_year: number;
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="app">
      <Head>
        <title>GutenReads</title>
        <meta
          name="description"
          content="A clean, beautiful interface for reading public-domain Project Gutenberg books."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen h-full bg-white scroll-smooth">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default AppLayout;
