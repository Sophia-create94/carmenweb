"use client";

import { useState, useEffect } from "react";
import "@/styles/ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has reached the bottom of the page
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsVisible(reachedBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/icons/top-arrow.png" alt="" />
    </button>
  );
};

export default ScrollToTopButton;
