"use client";

import { useState } from "react";

// Google Maps is only loaded after the user actively clicks (click-to-load).
// Until then, no request is made to Google and no data (e.g. IP address) is
// transferred — the privacy-friendly approach recommended by German DPAs.
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.9464292269304!2d8.683177699999998!3d49.428826799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c140a24a26c7%3A0x5fb1f404ac324294!2sDr.%20med.%20Carmen%20M%C3%BCller!5e0!3m2!1sde!2dde!4v1734554542611!5m2!1sde!2dde";

const PraxisMap = () => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className="office-location-map"
        title="Standort der Praxis auf Google Maps"
        src={MAP_SRC}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
  }

  return (
    <button
      type="button"
      className="office-location-map map-placeholder"
      onClick={() => setLoaded(true)}
    >
      <span className="map-placeholder-title">Karte anzeigen</span>
      <span className="map-placeholder-text">
        Dabei werden Daten an Google Maps übertragen. Klicken Sie hier, um die
        Karte zu laden.
      </span>
    </button>
  );
};

export default PraxisMap;
