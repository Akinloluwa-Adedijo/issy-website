import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import { useMobile } from "../../hooks/use-mobile";
// import { useEffect } from "react";

const transition = { duration: 1, ease: [0.65, 0, 0.35, 1] };

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const navLinks = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Moodboard",
    href: "/moodboard",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "100vh",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

interface NavBottomProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavBottom: React.FC<NavBottomProps> = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null; // Don't render anything if the menu is closed
  }

  return (
    <>
      <motion.div
        className="sm:hidden absolute overflow-hidden top-[75px] bg-black text-white z-10 w-full"
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div className="flex flex-col items-start gap-15 p-5">
          {navLinks.map((link, index) => (
            <Link
              to={link.href}
              key={index}
              onClick={() => setIsOpen(false)}
              className="text-3xl uppercase font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useMobile();

  return (
    <header className="relative flex flex-col w-full z-20">
      <div className="flex justify-between items-center py-5 px-5">
        <div>
          <Link to={"/"}>
            <img
              src="/issy-logo"
              alt="Isioma Idehen Logo"
              height={40}
              width={40}
              className="w-10 h-10"
            />
          </Link>
        </div>

        <nav className="flex uppercase justify-between items-center">
          <ul
            className="hidden sm:flex justify-between items-center gap-15"
            aria-hidden={isMobile ? "true" : "false"}
          >
            {navLinks.map((link, index) => (
              <Link
                to={link.href}
                key={index}
                onClick={() => setIsOpen(false)}
                className="text-lg uppercase"
              >
                {link.name}
              </Link>
            ))}
          </ul>

          {/* Mobile Controls */}
          <div
            aria-hidden={!isMobile ? "true" : "false"}
            className="sm:hidden relative flex items-center h-full hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.p
              className="text-lg uppercase"
              variants={opacity}
              animate={!isOpen ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p
              className="absolute opacity-0 text-lg uppercase"
              variants={opacity}
              animate={isOpen ? "open" : "closed"}
            >
              Close
            </motion.p>
          </div>
        </nav>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && <NavBottom isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
