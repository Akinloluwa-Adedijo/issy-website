import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    // Add a small delay to ensure content is rendered
    const timer = setTimeout(() => {
      // Try to use Lenis if available, otherwise fall back to window.scrollTo
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { duration: 1.15 });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Also scroll to top when component mounts
  useEffect(() => {
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { duration: 1.15 });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);

  return null;
};

export default ScrollToTop;
