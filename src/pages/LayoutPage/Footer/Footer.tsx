import "./Footer.css"; // Archivo de estilos

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-info">

        <div className="contact-info-section">
          <h2>Kontakt</h2>
          <p><strong>Telefon:</strong> 06221 / 412 450</p>
          <p><strong>Telefax:</strong> 06221 / 434 8260</p>
          <p><strong>E-Mail:</strong> praxisteammueller@web.de</p>
          <p>Dossenheimer Landstr. 40</p>
          <p>69121 Heidelberg</p>
        </div>

        <div className="contact-info-section">
          <h2>Praxiszeiten</h2>
          <p>
            <strong>Montag, Dienstag & Donnerstag</strong>
            <br /> 9:00 - 12:00 Uhr & 15:00 - 17:00 Uhr
          </p>
          <p>
            <strong>Mittwoch</strong>
            <br /> 09:00 - 12:00 Uhr
          </p>
          <p>
            <strong>Freitag</strong>
            <br /> 09:00 - 14:00 Uhr
          </p>
        </div>

        <div className="contact-info-section">
          <h2>Telefonische Erreichbarkeit</h2>
          <p>Beginn jeweils eine halbe Stunde vor Praxis-Öffnung.</p>
        </div>
      </div>

      <div className="map-container">
        <iframe 
          className="office-location-map"
          title="office-location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.9464292269304!2d8.683177699999998!3d49.428826799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c140a24a26c7%3A0x5fb1f404ac324294!2sDr.%20med.%20Carmen%20M%C3%BCller!5e0!3m2!1sde!2dde!4v1734554542611!5m2!1sde!2dde"
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default Footer;
