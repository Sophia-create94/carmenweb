"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const galleryImages = [
  {
    original: "/img/services-page/gallery/img1.jpeg",
    thumbnail: "/img/services-page/gallery/img1.jpeg",
    originalWidth: 500,
    originalAlt: "Leistungen der Kinderarztpraxis Dr. Carmen Müller – Bild 1",
    thumbnailAlt: "Leistungen der Kinderarztpraxis – Vorschaubild 1",
  },
  {
    original: "/img/services-page/gallery/img2.jpeg",
    thumbnail: "/img/services-page/gallery/img2.jpeg",
    originalWidth: 500,
    originalAlt: "Leistungen der Kinderarztpraxis Dr. Carmen Müller – Bild 2",
    thumbnailAlt: "Leistungen der Kinderarztpraxis – Vorschaubild 2",
  },
  {
    original: "/img/services-page/gallery/img3.jpeg",
    thumbnail: "/img/services-page/gallery/img3.jpeg",
    originalWidth: 500,
    originalAlt: "Leistungen der Kinderarztpraxis Dr. Carmen Müller – Bild 3",
    thumbnailAlt: "Leistungen der Kinderarztpraxis – Vorschaubild 3",
  },
  {
    original: "/img/services-page/gallery/img4.jpeg",
    thumbnail: "/img/services-page/gallery/img4.jpeg",
    originalWidth: 500,
    originalAlt: "Leistungen der Kinderarztpraxis Dr. Carmen Müller – Bild 4",
    thumbnailAlt: "Leistungen der Kinderarztpraxis – Vorschaubild 4",
  },
];

const ServicesGallery = () => {
  return (
    <section className="services-image-gallery">
      <ImageGallery
        items={galleryImages}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={1000}
        slideInterval={4000}
      />
    </section>
  );
};

export default ServicesGallery;
