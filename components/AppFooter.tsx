export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-10 lg:pb-20">
        <div>
          <p className="font-ppwriter pb-4">
            This website is a personal project built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Next.js
            </a>{" "}
            and powered by the{" "}
            <a
              href="https://github.com/danaeharris/gutenreads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Gutendex API
            </a>
            .
          </p>
          <p className="font-ppwriter">
            You can take a look at the{" "}
            <a
              href="https://github.com/danaeharris/gutenreads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              source code
            </a>{" "}
            on Github.
          </p>
        </div>
      </div>
    </footer>
  );
}
