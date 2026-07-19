import "@/styles/Footer.css";
import PraxisMap from "@/components/PraxisMap";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-info">
        <div className="contact-info-section">
          <h2>Kontakt</h2>
          <p><strong>Telefon:</strong> 06221 / 412 450</p>
          <p><strong>Telefax:</strong> 06221 / 434 8260</p>
          <p><strong>E-Mail:</strong> <a href="mailto:praxisteammueller@web.de">praxisteammueller@web.de</a></p>
          <p>Dossenheimer Landstr. 40</p>
          <p>69121 Heidelberg</p>
        </div>

        <div className="contact-info-section">
          <h2>Praxiszeiten</h2>
          <p>
            <strong>Montag, Dienstag &amp; Donnerstag</strong>
            <br /> 9:00 - 12:00 Uhr &amp; 15:00 - 17:00 Uhr
          </p>
          <p>
            <strong>Mittwoch</strong>
            <br /> 9:00 - 12:00 Uhr
          </p>
          <p>
            <strong>Freitag</strong>
            <br /> 9:00 - 14:00 Uhr
          </p>
        </div>

        <div className="contact-info-section">
          <h2>Telefon</h2>
          <p>
            <strong>Montag, Dienstag &amp; Donnerstag</strong>
            <br /> 8:00 - 13:00 Uhr &amp; 14:00 - 18:00 Uhr
          </p>
          <p>
            <strong>Mittwoch</strong>
            <br /> 8:00 - 13:00 Uhr
          </p>
          <p>
            <strong>Freitag</strong>
            <br /> 8:00 - 14:00 Uhr
          </p>
        </div>
      </div>

      <div className="map-container">
        <PraxisMap />
      </div>
    </div>
  );
};

export default Footer;
