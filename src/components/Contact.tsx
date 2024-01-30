import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <div className="mx-auto max-w-[500px] rounded-md bg-boxes bg-opacity-95 py-5 px-4 shadow-3xl">
        <h3 className="mb-4 text-center text-lg">Let&apos;s get in touch!</h3>
        <a
          href="mailto:danial.daneshfar@gmail.com"
          className="mx-auto mt-6 block max-w-max rounded-md bg-primary px-6 py-2 shadow-3xl duration-200 ease-in-out hover:bg-header hover:bg-opacity-60"
        >
          Email me
        </a>
      </div>
    </>
  );
};

export default Contact;
