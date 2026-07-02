import type { Metadata } from "next";
import "@/styles/TeamPage.css";

export const metadata: Metadata = {
  title: "Praxisteam",
  description:
    "Lernen Sie das Team der Kinder- & Jugendarztpraxis Dr. med. Carmen Müller in Heidelberg kennen.",
  alternates: { canonical: "/team" },
};

const teamMembers = [
  {
    image: "/img/team-gallery/Team-Carmen.jpeg",
    name: "Dr. med. Carmen Müller",
    role: "Fachärztin für Kinderheilkunde und Jugendmedizin",
  },
  {
    image: "/img/team-gallery/Team-Seyma.jpeg",
    name: "Seyma Yilmaz",
    role: "Leitende Medizinische Fachangestellte",
  },
  {
    image: "/img/team-gallery/Team-Maria.jpg",
    name: "Maria Pucci-Hidalgo",
    role: "Medizinische Fachangestellte",
  },
  {
    image: "/img/team-gallery/Team-Chiara.jpeg",
    name: "Chiara-Sophi Lauricella",
    role: "Auszubildende zur MFA",
  },
  {
    image: "/img/team-gallery/Team-Safia.jpeg",
    name: "Safia Tair",
    role: "Auszubildende zur MFA",
  },
  {
    image: "/img/team-gallery/no-picture.png",
    name: "Malek Malki",
    role: "Praxisassistentin",
  },
];

export default function TeamPage() {
  return (
    <div className="page-content team-section">
      <h2 className="page-title">Praxisteam</h2>
      {teamMembers.map((member) => (
        <div className="team-member" key={member.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={member.image} alt={member.name} className="team-image" />
          <div className="team-info">
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
