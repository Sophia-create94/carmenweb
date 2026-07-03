import type { Metadata } from "next";
import "@/styles/EmergenciesPage.css";

export const metadata: Metadata = {
  title: "Notfälle",
  description:
    "Notfallnummern und kinder- & jugendärztlicher Bereitschaftsdienst in Heidelberg außerhalb der Sprechzeiten der Praxis Dr. Carmen Müller.",
  alternates: { canonical: "/notfalle/" },
};

export default function EmergenciesPage() {
  return (
    <div className="page-content emergency-container">
      <h2 className="page-title">Notfälle</h2>

      <div className="section">
        <h3 className="section-title">Versorgung außerhalb der Sprechzeiten:</h3>
        <p>
          <strong>
            Kinder- und jugendärztlicher Bereitschaftsdienst in der Kinderklinik
            Heidelberg
          </strong>
          <br />
          Im Neuenheimer Feld 430
          <br />
          <span className="phone-number">Tel.: 06221 - 116117</span>
        </p>

        <ul className="emergency-hours">
          <li>
            <strong>Montag, Dienstag &amp; Donnerstag:</strong>
            <br />
            19:00 - 22:00 Uhr
          </li>
          <li>
            <strong>Mittwoch &amp; Freitag:</strong>
            <br />
            16:00 - 22:00 Uhr
          </li>
          <li>
            <strong>Wochenende &amp; Feiertage:</strong>
            <br />
            9:00 - 22:00 Uhr
          </li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="section">
        <h3 className="section-title">Außerhalb dieser Zeiten:</h3>
        <p>
          <strong>Notfallambulanz der Kinderklinik Heidelberg</strong>
          <br />
          <span className="phone-number">Tel.: 06221 - 564823</span>
        </p>

        <ul className="emergency-contact">
          <li>
            Bei akuten lebensbedrohlichen Notfällen: Rettungsleitstelle
            <br />
            Tel.: <span className="important-number">112</span>
          </li>
          <li>
            Bei akuten Vergiftungen: Giftnotrufzentrale
            <br />
            Tel.: <span className="important-number">030 - 19240</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
