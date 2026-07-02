"use client";

import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/styles/HomePage.css";

const images = [
  {
    original: "/img/praxis-gallery/praxis-1.jpeg",
    thumbnail: "/img/praxis-gallery/praxis-1.jpeg",
    originalAlt: "Kinderarztpraxis Dr. Carmen Müller in Heidelberg – Ansicht 1",
    thumbnailAlt: "Kinderarztpraxis Dr. Carmen Müller – Vorschaubild 1",
  },
  {
    original: "/img/praxis-gallery/praxis-2.jpeg",
    thumbnail: "/img/praxis-gallery/praxis-2.jpeg",
    originalAlt: "Kinderarztpraxis Dr. Carmen Müller in Heidelberg – Ansicht 2",
    thumbnailAlt: "Kinderarztpraxis Dr. Carmen Müller – Vorschaubild 2",
  },
  {
    original: "/img/praxis-gallery/praxis-3.jpeg",
    thumbnail: "/img/praxis-gallery/praxis-3.jpeg",
    originalAlt: "Kinderarztpraxis Dr. Carmen Müller in Heidelberg – Ansicht 3",
    thumbnailAlt: "Kinderarztpraxis Dr. Carmen Müller – Vorschaubild 3",
  },
];

const HomeContent = () => {
  const [clickTitleCount, setClickTitleCount] = useState(0);
  const [showCapy, setShowCapy] = useState(false);

  const handleTitleClick = () => {
    setClickTitleCount((prevCount) => prevCount + 1);

    setTimeout(() => {
      setClickTitleCount(0);
    }, 2000);

    if (clickTitleCount + 1 === 10) {
      setShowCapy(true);
      setClickTitleCount(0);
    }
  };

  return (
    <div className="page-content praxis-content">
      <section className="praxis-image-gallery">
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideDuration={1000}
          slideInterval={4000}
        />
      </section>
      <section>
        <h2 className="page-title visually-hidden">
          Willkommen in unserer Kinder- &amp; Jugendarztpraxis
        </h2>
        <p onClick={handleTitleClick}>Liebe Eltern!</p>

        {showCapy && (
          <iframe
            src="https://giphy.com/embed/Y00mF6fy4LJdDFeN5M"
            className="capy-gif"
            title="capy-gif"
          ></iframe>
        )}

        <p>
          Auf unserer Praxis-Homepage finden Sie umfassende Informationen zu
          unserem Leistungsspektrum, unseren Sprechzeiten und nützliche Hinweise.
        </p>

        <p>
          Wir freuen uns darauf, Ihre Kinder medizinisch betreuen zu dürfen und
          heißen auch neue Patient/innen herzlich willkommen! Dabei legen wir
          großen Wert auf eine einfühlsame, vertrauensvolle und zuverlässige
          Betreuung. Ihre Kinder stehen bei uns im Mittelpunkt – mit Empathie und
          Fachwissen sorgen wir für die bestmögliche medizinische Versorgung.
        </p>

        <p>
          Ihre Zufriedenheit, das Wohl Ihrer Kinder und das Gefühl, sich bei uns
          gut aufgehoben zu wissen, sind unser höchstes Anliegen. Bei uns haben
          Sie stets eine feste Ansprechpartnerin als Ärztin.
        </p>

        <p>Vertrauen Sie auf unsere Expertise und unser Engagement.</p>

        <p>Dr. Carmen Müller &amp; Team</p>
      </section>
    </div>
  );
};

export default HomeContent;
