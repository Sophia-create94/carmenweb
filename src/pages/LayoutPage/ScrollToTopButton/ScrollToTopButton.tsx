import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import topArrowIcon from "../../../img/icons/top-arrow.png";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has reached the bottom of the page
      const reachedBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
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
      <button className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
        <img src={topArrowIcon} alt="" />
      </button>
  );
};

export default ScrollToTopButton;
