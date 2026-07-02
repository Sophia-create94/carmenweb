import React from "react";
import "./EmergenciesPage.css";

const EmergenciesPage = () => {
  return (
    <div className="page-content emergency-container">
      <h1 className="page-title">Notfälle</h1>

      <div className="section">
        <h2 className="section-title">Versorgung außerhalb der Sprechzeiten:</h2>
        <p>
          <strong>Kinder- und jugendärztlicher Bereitschaftsdienst in der Kinderklinik Heidelberg</strong><br />
          Im Neuenheimer Feld 430<br />
          <span className="phone-number">Tel.: 06221 - 116117</span>
        </p>

        <ul className="emergency-hours">
          <li>
            <strong>Montag, Dienstag & Donnerstag:</strong><br />
            19:00 - 22:00 Uhr
          </li>
          <li>
            <strong>Mittwoch & Freitag:</strong><br />
            16:00 - 22:00 Uhr
          </li>
          <li>
            <strong>Wochenende & Feiertage:</strong><br />
            9:00 - 22:00 Uhr
          </li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="section">
        <h2 className="section-title">Außerhalb dieser Zeiten:</h2>
        <p>
          <strong>Notfallambulanz der Kinderklinik Heidelberg</strong><br />
          <span className="phone-number">Tel.: 06221 - 564823</span>
        </p>

        <ul className="emergency-contact">
          <li>
            Bei akuten lebensbedrohlichen Notfällen: Rettungsleitstelle<br />
            Tel.: <span className="important-number">112</span>
          </li>
          <li>
            Bei akuten Vergiftungen: Giftnotrufzentrale<br />
            Tel.: <span className="important-number">030 - 19240</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmergenciesPage;
