import "./LinksPage.css";

const links = [
  {
    title: "Gesundheitsberatung",
    url: "https://www.bzga.de/",
    description: "Bundeszentrale für gesundheitliche Aufklärung (BZgA)",
  },
  {
    title: "Kindergesundheit",
    url: "https://www.kindergesundheit-info.de/themen/",
    description: "Informationsangebot der BZgA für Kindergesundheit",
  },
  {
    title: "Berufsverband",
    url: "https://www.bvkj.de/startseite/",
    description: "Berufsverband der Kinder- und Jugendärzt*innen e.V. (BVKJ)",
  },
  {
    title: "Robert Koch-Institut",
    url: "https://www.rki.de/DE/Home/homepage_node.html",
    description:
      "Bundesinstitut im Geschäftsbereich des Bundesministeriums für Gesundheit",
  },
  {
    title: "Ernährungsberatung",
    url: "https://www.klinikum-bochum.de/fachbereiche/kinder-und-jugendmedizin/forschungsdepartment-kinderernaehrung.html",
    description: "Forschungsdepartment Kinderernährung (FKE)",
  },
  {
    title: "Familienergotherapie",
    url: "https://familienergo.de/",
    description: '"Fit für die Schule und stark für das Leben"',
  },
  {
    title: "Pollenflugkalender",
    url: "https://www.dwd.de/DE/leistungen/gefahrenindizespollen/gefahrenindexpollen.html",
    description: "Pollenflug-Gefahrenindex in Deutschland",
  },
];

const LinksPage = () => {
  return (
    <div className="page-content links-content">
      <div className="links-list">
        {links.map((link, index) => (
          <div className="link-item" key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              {link.title}
            </a>
            <p className="link-description">{link.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
