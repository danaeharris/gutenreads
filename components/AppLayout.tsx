import Head from "next/head";
import Footer from "@/components/AppFooter";

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
        <meta property="og:title" content="GutenReads" />
        <meta property="og:type" content="ebooks" />
        <meta
          property="og:description"
          content="A clean, beautiful interface for reading public-domain Project Gutenberg books."
        />
        <meta property="og:image" content="./meta.jpg" />
        <meta property="og:url" content="https://gutenreads.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* import favicon.jpg as favicon */}
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="min-h-screen h-full bg-white scroll-smooth">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default AppLayout;
