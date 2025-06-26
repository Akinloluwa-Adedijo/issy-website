import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import ScrollToTop from "../utils/ScrollToTop";
import { AnimatePresence, motion, useInView } from "framer-motion";

const transition = {
  duration: 1.35,
  ease: [0.65, 0, 0.35, 1],
  delay: 1,
};

export const slideUp = {
  initial: {
    y: 100,
    opacity: 0,
    blur: 10,
    transition,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition,
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Make lenis globally available for ScrollToTop component
    (window as any).lenis = lenis;

    return () => {
      (window as any).lenis = null;
    };
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <main>
          <motion.section
            key={location.pathname}
            ref={ref}
            variants={slideUp}
            initial="initial"
            animate={inView ? "enter" : "initial"}
          >
            <Outlet />
          </motion.section>
        </main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
