import type { Metadata } from "next";
import ServicesGallery from "@/components/ServicesGallery";
import "@/styles/ServicesPage.css";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unser Leistungsspektrum: Vorsorgeuntersuchungen U2–U11, J1/J2, Impfungen, Sonographie, EKG, Lungenfunktion, Allergiediagnostik und mehr.",
  alternates: { canonical: "/leistungen" },
};

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

export default function ServicesPage() {
  return (
    <div className="page-content services-content">
      <h2 className="page-title">Leistungen</h2>
      <ServicesGallery />
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="services-image-lateral"
          src="/img/services-page/services-lateral.jpeg"
          alt="Behandlungsraum der Kinderarztpraxis Dr. Carmen Müller"
        />
      </div>
    </div>
  );
}
