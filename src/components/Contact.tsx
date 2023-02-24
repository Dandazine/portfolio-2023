import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <div className="mx-auto max-w-[500px] ">
        <h3 className="mb-4 text-center text-lg">Let's get in touch!</h3>
        <p>
          I am currently looking for{" "}
          <span className="text-header">part-time</span> and{" "}
          <span className="text-header">full-time</span> positions as a{" "}
          <span className="text-header">Software Developer</span>. My inbox is
          always open, and I tend to respond quickly to emails, so please feel
          free to contact me if there is anything you would like to talk about!
        </p>
        <a
          href="mailto:danial.daneshfar@gmail.com"
          className="mx-auto mt-6 block max-w-max rounded-md bg-primary px-6 py-2 shadow-3xl duration-200 ease-in-out hover:bg-boxes hover:bg-opacity-60"
        >
          Email me
        </a>
      </div>
    </>
  );
};

export default Contact;
