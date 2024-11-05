import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between font-medium lg:flex-col lg:py-6 sm:py-4">
        <span>
          {new Date().getFullYear()} <span className="text-lg">&copy;</span> All
          Rights Reserved.
        </span>
        <div className="flex items-center lg:py-2 sm:py-1">
          Build With
          <span className="text-2xl px-1 text-primary dark:text-primaryDark">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://www.linkedin.com/in/rafay-nadeem-14a2632bb/"
            target="_blank"
            className="underline underline-offset-4"
          >
            Future-Rafay
          </Link>
        </div>
        <Link href="/contact" target="_blank" className="underline underline-offset-4">
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
