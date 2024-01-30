import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Footer = (props: Props) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const svg = {
    email: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
        role="graphics-symbol"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    // git: (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 24 24"
    //     className="h-8 w-8 fill-light"
    //     role="graphics-symbol"
    //   >
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
    //     ></path>
    //   </svg>
    // ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-light"
        role="graphics-symbol"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
        />
      </svg>
    ),
  };

  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-center bg-boxes">
      <nav className="mt-4 flex flex-wrap items-center justify-center gap-3.7">
        {[
          {
            link: "mailto:danial.daneshfar@gmail.com",
            label: "link to email",
            icon: svg.email,
          },
          // {
          //   link: "https://github.com/Dandazine",
          //   label: "link to github",
          //   icon: svg.git,
          // },
          {
            link: "https://www.linkedin.com/in/danialdan/",
            label: "link to linkedin",
            icon: svg.linkedin,
          },
        ].map((anchor: any, i: number) => (
          <motion.a
            key={anchor.link}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: (i + 8) / 10, ease: "easeInOut" }}
            viewport={{ once: true }}
            href={anchor.link}
            aria-label={anchor.label}
            className="after:scale-y-1 relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-light after:duration-300 after:ease-out hover:after:scale-x-75"
          >
            {anchor.icon}
          </motion.a>
        ))}
      </nav>
      <p className="my-3 text-center">
        © {getYear()} Danial Daneshfar - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
