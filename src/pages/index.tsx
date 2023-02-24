import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { useState } from "react";
import { Exp, Profile } from "@/components/About";
import Services from "@/components/Services";
import Project from "@/components/Project";
import Hero from "@/components/Hero";
import Tab from "@/components/Tab";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentTab, setCurrentTab] = useState<string>("profile");
  const handleTab = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Head>
        <title>Danial - Dandazine</title>
        <meta
          name="description"
          content="Web portfolio created by Danial Daneshfar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500&family=Manrope&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full min-h-screen w-full bg-dark font-manrope text-light">
        <Header />
        <main>
          <Hero />
          <Section
            id="about"
            title="<About />"
            content={
              <>
                <section className="mx-auto mb-5 ">
                  <Tab
                    btnName="Profile"
                    select={currentTab === "profile"}
                    handleTab={() => setCurrentTab("profile")}
                  />
                  <Tab
                    btnName="Experience"
                    select={currentTab === "xp"}
                    handleTab={() => setCurrentTab("xp")}
                  />
                </section>
                {currentTab === "profile" && <Profile />}
                {currentTab === "xp" && <Exp />}
              </>
            }
          />

          <Section id="services" title="<Services />" content={<Services />} />

          <Section id="projects" title="<Projects />" content={<Project />} />

          <Section id="contact" title="<Contact />" content={<Contact />} />
        </main>
        <Footer />
      </div>
    </>
  );
}
