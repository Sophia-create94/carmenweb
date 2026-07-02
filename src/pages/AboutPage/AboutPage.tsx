import React from "react";
import "./AboutPage.css";
import ContantData from "../../components/ContactData/ContantData";

const AboutPage = () => {
  return (
    <div className="page-content about-container">

      <h1 className="subtitle">Praxis</h1>
      <ContantData />

      <h2 className="subtitle">Öffnungszeiten</h2>
      <div className="section">
        <p>Montag - Donnerstag: <strong>9:00 - 12:00</strong></p>
        <p>Montag, Dienstag, Donnerstag: <strong>15:00 - 17:00</strong></p>
        <p>Freitag: <strong>9:00 - 14:00</strong></p>
        <p>Termine nach telefonischer Vereinbarung</p>
      </div>

      <h2 className="subtitle">Zuständige Aufsichtsbehörde</h2>
      <div className="section">
        <p>Kassenärztliche Vereinigung Nordbaden<br />
           Bezirksstelle Karlsruhe<br />
           Keßlerstr. 1<br />
           76185 Karlsruhe</p>
        <p>Tel.: 0721 5961-0<br />
           Fax: 0721 5961-188</p>
      </div>

      <h2 className="subtitle">Zuständige Kammer</h2>
      <div className="section">
        <p>Landesärztekammer Baden-Württemberg<br />
           Jahnstr. 40<br />
           70597 Stuttgart</p>
        <p>Tel.: 0711 76989-0<br />
           Fax: 0711 76989-50</p>
      </div>

      <h2 className="subtitle">Berufsbezeichnung</h2>
      <div className="section">
        <p>Ärztin (verliehen in der Bundesrepublik Deutschland)</p>
      </div>

      <h2 className="subtitle">Berufsrechtliche Regelungen</h2>
      <div className="section">
        <p>Berufsordnung der Landesärztekammer von Baden-Württemberg<br />
           Heilberufegesetz des Landes Baden-Württemberg</p>
        <p>Die Regelungen finden sich im Gesetzblatt des Landes Baden-Württemberg:<br />
           <a href="https://www.aerztekammer-bw.de" target="_blank" rel="noopener noreferrer">
             www.aerztekammer-bw.de
           </a>
        </p>
      </div>

      <h2 className="subtitle">Medienrechtliche Angaben</h2>
      <div className="section">
        <p>Inhaltlich verantwortlich gemäß §6 MDStV:<br />
           <strong>Dr. med. Carmen Müller</strong></p>
      </div>

      <h2 className="subtitle">Haftungshinweis</h2>
      <div className="section">
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
          externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
          verantwortlich.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
