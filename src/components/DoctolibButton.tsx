import "@/styles/DoctolibButton.css";

// Doctolib booking button. The logo is served locally (not from doctolib.de),
// so no request/IP is sent to Doctolib on page load — only when the visitor
// actually clicks "Termin" do they leave for doctolib.de.
const PROFILE_URL =
  "https://www.doctolib.de/kinderheilkunde-kinder-und-jugendmedizin/heidelberg/carmen-mueller-heidelberg?utm_campaign=website-button&utm_source=online-booking&utm_medium=referral";

const DoctolibButton = () => {
  return (
    <nav
      className="doctolib-widget"
      id="doctolib-nav"
      aria-label="Doctolib Schnellzugriff"
    >
      <a
        href="#maincontent"
        className="skip-link"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        Zum Hauptinhalt springen
      </a>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/doctolib-white.png" alt="Doctolib Logo" />
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Termin Online über Doctolib buchen"
      >
        Termin online buchen
      </a>
    </nav>
  );
};

export default DoctolibButton;
