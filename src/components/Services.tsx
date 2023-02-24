import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Services = (props: Props) => {
  const services = ["Web Development", "Web Design", "UX Research", "Tutoring"];
  return (
    <>
      <section className="mt-10 px-1">
        <h3 className="mb-6 max-w-max border-b-2 border-primary text-lg">
          My services
        </h3>
        <ul className="grid grid-cols-1 gap-3.7 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service: string, i: number) => (
            <motion.li
              key={service}
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: (i + 5) / 10, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-boxes py-2 text-center shadow-3xl"
            >
              {service}
            </motion.li>
          ))}
        </ul>
      </section>
      <section className="my-8 px-1">
        <h3 className="mb-4 max-w-max border-b-2 border-primary text-lg">
          My values
        </h3>
        <p className="py-1">
          Scalability and inclusiveness is at the core of{" "}
          <span className="text-header">every project</span> I work on. I make
          sure that each project I embark on is not only inclusive to every user
          but is also written with code that is clear and easy to read.
        </p>
        <p className="py-1">
          <span className="text-header">For the website users</span> - my main
          concern is making sure everyone is supported when they use my
          websites. It is my goal to make sure that every user feels welcomed
          and valued. The main way I address this is by following the best
          practices of accessibility using the standards set by{" "}
          <span className="text-header">WCAG 2</span>.
        </p>
        <p className="py-1">
          <span className="text-header">For my collaborating developers</span> -
          I prioritise readable and scalable code. This includes ensuring that
          all my variables are properly named and that core functions have
          comments that explain their purpose.
        </p>
        <p className="py-1">
          In short, my two main values are:{" "}
          <span className="text-header">
            Making sure my code is scalable, and it is inclusive to all users
          </span>
          .
        </p>
      </section>
      <section className="my-8 px-1">
        <h3 className="mb-4 max-w-max border-b-2 border-primary text-lg">
          How I work
        </h3>
        <ul>
          {[
            "Discussing goals and defining what success would look like.",
            "Planning and preparing ways to accomplish set short-term and long-term goals.",
            "Executing the plan.",
            "Testing and refining.",
          ].map((step: string, i: number) => (
            <motion.li
              key={step}
              initial={{
                y: 70,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: (i + 4) / 10, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <span className="text-header">Step 0{i + 1}</span>: {step}
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Services;
