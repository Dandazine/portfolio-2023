import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  // If nav bar should go up or down based on the direction of the scroll
  const [showNav, setShowNav] = useState<boolean>(true);
  // state for mobile menu
  const [menuToggleOpen, setMenuToggleOpen] = useState<boolean>(false);
  // media query in js to keep it concise
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const navigation = () => {
    const navLinks = [
      // { link: "#about", text: "About" },
      // { link: "#services", text: "Services" },
      { link: "#projects", text: "Projects" },
      { link: "#contact", text: "Contact" },
    ];
    return navLinks.map((navLink) => (
      <a key={navLink.text} href={navLink.link}>
        {navLink.text}
      </a>
    ));
  };

  // direction of scroll by seeing current y and previously recorded y
  const [scroll, setScroll] = useState<any>({
    y: 0,
    prevY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScroll((prevState: any) => {
        return {
          y: window.scrollY,
          prevY: prevState.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  // to track if user is scrolling up or scrolling down, deciding if nav state should return true or false
  useEffect(() => {
    if (scroll.prevY > scroll.y && showNav !== true) {
      setShowNav(true);
    } else if (scroll.prevY < scroll.y && showNav !== false) {
      setShowNav(false);
      setMenuToggleOpen(false);
    }
  }, [scroll]);

  // state for checking screensize and seeing if menu is open upon re-render
  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth >= 650) {
        setIsMobile(false);
        if (menuToggleOpen === true) {
          setMenuToggleOpen(false);
        }
      } else {
        setIsMobile(true);
      }
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-boxes bg-opacity-60 px-6 py-3 backdrop-blur ${
        showNav ? "translate-x-0" : "-translate-y-full"
      } duration-200 ease-in`}
    >
      <nav className="mx-auto flex items-center justify-end md:max-w-[1000px]">
        <a href="#" className="mr-auto" aria-label="site logo">
          <Image src="/logo.png" alt="text" width={32} height={32} />
        </a>
        {isMobile === true ? (
          <>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="relative z-50 h-8 w-8"
                aria-label="primary navigation menu toggle"
                onClick={() => {
                  setMenuToggleOpen(!menuToggleOpen);
                }}
              >
                {menuToggleOpen === true ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                )}
              </svg>
            </button>
            <div
              className={` ${
                menuToggleOpen === true
                  ? "fixed right-0 top-0 flex h-screen w-64 flex-col items-center justify-center gap-y-11 overflow-y-hidden bg-primary [&>a]:w-full [&>a]:py-4 [&>a]:text-center"
                  : "hidden"
              }`}
            >
              {navigation()}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-x-0.5 [&>a]:px-2 [&>a]:duration-300 hover:[&>a]:text-header">
              {navigation()}
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

{
  /* <nav className="mx-auto flex items-center justify-end px-3 py-3 md:max-w-[1000px] [&>a]:duration-300 hover:[&>a]:text-header">
        <a href="/" className="mr-auto">
          <Image src="/logo.png" alt="text" width={32} height={32} />
        </a>
        <div className="flex justify-center gap-2 [&>a]:duration-300 hover:[&>a]:text-header">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav> */
}
