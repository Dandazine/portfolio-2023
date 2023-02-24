import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  id: string;
  title: string;
  content: any;
};

function Section({ id, title, content }: Props) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      id={id}
      className="mx-auto my-36 w-11/12 px-[5px] pt-11 leading-7 tracking-wider md:w-full md:max-w-[625px] lg:max-w-[945px]"
    >
      <h2 className="mt-6 mb-8 text-center text-xl tracking-widest text-header lg:text-2xl">
        {title}
      </h2>
      <motion.div
        initial={{
          y: +110,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    </section>
  );
}

export default Section;
