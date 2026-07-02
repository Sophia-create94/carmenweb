import "./ServicesPage.css";
import ImageGallery from "react-image-gallery";
import imgLateral from "../../img/services-page/services-lateral.jpeg"
import imgGallery1 from "../../img/services-page/gallery/img1.jpeg"
import imgGallery2 from "../../img/services-page/gallery/img2.jpeg"
import imgGallery3 from "../../img/services-page/gallery/img3.jpeg"
import imgGallery4 from "../../img/services-page/gallery/img4.jpeg"

const ServicesPage = () => {

  const galleryImages = [
    {
      original: imgGallery1,
      thumbnail: imgGallery1,
      originalWidth: 500,
      originalAlt: "Leistungen der Kinderarztpraxis Dr. Carmen Müller – Bild 1",
      thumbnailAlt: "Leistungen der Kinderarztpraxis – Vorschaubild 1",
    },
    {
      original: imgGallery2,
      thumbnail: imgGallery2,
      originalWidth: 500,
      originalAlt: "Leistungen der Kinderarztpraxis Dr. Carmen Müller – Bild 2",
      thumbnailAlt: "Leistungen der Kinderarztpraxis – Vorschaubild 2",
    },
    {
      original: imgGallery3,
      thumbnail: imgGallery3,
      originalWidth: 500,
      originalAlt: "Leistungen der Kinderarztpraxis Dr. Carmen Müller – Bild 3",
      thumbnailAlt: "Leistungen der Kinderarztpraxis – Vorschaubild 3",
    },
    {
      original: imgGallery4,
      thumbnail: imgGallery4,
      originalWidth: 500,
      originalAlt: "Leistungen der Kinderarztpraxis Dr. Carmen Müller – Bild 4",
      thumbnailAlt: "Leistungen der Kinderarztpraxis – Vorschaubild 4",
    },
  ];

  const services = [
    "Kinder-Vorsorgeuntersuchungen von U2 bis U11",
    "Neugeborenenuntersuchung",
    "Jugend-Vorsorgeuntersuchungen J1 und J2",
    "Untersuchungen nach dem Jugendarbeitsschutzgesetz",
    "Sporttauglichkeitsuntersuchungen",
    "Entwicklungsdiagnostik, Sprachdiagnostik",
    "Sehtests und Amblyopie Screening",
    "Hörtest",
    "Impfberatung und Impfungen, auch Reiseimpfungen",
    "Ultraschalluntersuchungen (Sonographie) der Hüfte (u.a. im Rahmen der U3)",
    "EKG",
    "Lungenfunktionstestung/ Spirometrie",
    "Laboruntersuchungen",
    "Akutlabor in der Praxis (CRP, Urinuntersuchung, Streptokokken-Schnelltest)",
    "Präoperative Untersuchungen, Narkosevorbereitung",
    "Allergiediagnostik,-beratung",
    "Hyposensibilisierungsbehandlung",
    "Psychosomatische Beratungsgespräche",
    "Beratung in Konfliktsituationen, sowie bei Erziehungsfragen oder Verhaltensauffälligkeiten",
    "Hausbesuche in dringenden Fällen",
  ];

  return (
    <div className="page-content services-content">
      <h2 className="page-title">Leistungen</h2>
      <section className='services-image-gallery'>
        <ImageGallery 
            items={galleryImages}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            slideDuration={1000}
            slideInterval={4000} 
        />
      </section>
      <div className="services-list-container">
        <div className="services-list">
          <ul>
            {services.map((service, index) => (
              <li key={index} className="service-item">
                {service}
              </li>
            ))}
          </ul>
        </div>
        <img className="services-image-lateral" src={imgLateral} alt="Behandlungsraum der Kinderarztpraxis Dr. Carmen Müller" />
      </div>
  </div>
  );
};

export default ServicesPage;
