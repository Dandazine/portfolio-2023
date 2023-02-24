import React from "react";
import BgCircles from "@/components/BgCircles";
import { text } from "stream/consumers";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex h-screen max-h-[756px] flex-col items-center justify-center overflow-x-hidden pt-24">
      <BgCircles />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className=" text-[11px] uppercase tracking-[0.5em] text-header md:text-xs">
          {"<"}Software Developer/{">"}
        </p>
        <h1 className=" mt-1.5 mb-2 font-cinzel text-3xl font-medium md:mb-4 md:mt-3 md:text-5xl">
          Danial Daneshfar
        </h1>
        <nav className=" mb-0.5 flex w-full flex-wrap justify-center text-sm md:text-base ">
          {[
            { text: "About", anchor: "#about" },
            { text: "Services", anchor: "#services" },
            { text: "Projects", anchor: "#projects" },
            { text: "Contact", anchor: "#contact" },
          ].map((link) => (
            <a
              key={link.text}
              href={link.anchor}
              className="after:scale-y-1 relative border-0 px-3 py-1.5 duration-1000 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-light after:duration-300 after:ease-out hover:after:scale-x-75"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Hero;
