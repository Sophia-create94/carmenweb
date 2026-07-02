import React from "react";
import "./TeamPage.css";
import imgCarmen from "../../img/team-gallery/Team-Carmen.jpeg";
import imgSeyma from "../../img/team-gallery/Team-Seyma.jpeg";
import imgMaria from "../../img/team-gallery/Team-Maria.jpg";
import imgChiara from "../../img/team-gallery/Team-Chiara.jpeg";
import imgSafia from "../../img/team-gallery/Team-Safia.jpeg";
import noPicture from "../../img/team-gallery/no-picture.png";

const teamMembers = [
  {
    image: imgCarmen,
    name: "Dr. med. Carmen Müller",
    role: "Fachärztin für Kinderheilkunde und Jugendmedizin",
  },
  {
    image: imgSeyma,
    name: "Seyma Yilmaz",
    role: "Leitende Medizinische Fachangestellte",
  },
  {
    image: imgMaria,
    name: "Maria Pucci-Hidalgo",
    role: "Medizinische Fachangestellte",
  },
  {
    image: imgChiara,
    name: "Chiara-Sophi Lauricella",
    role: "Auszubildende zur MFA",
  },
  {
    image: imgSafia,
    name: "Safia Tair",
    role: "Auszubildende zur MFA",
  },
  {
    image: noPicture,
    name: "Malek Malki",
    role: "Praxisassistentin",
  },
];

const TeamPage = () => {
  return (
    <div className="page-content team-section">
      <h2 className="page-title">Praxisteam</h2>
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.image} alt={member.name} className="team-image" />
          <div className="team-info">
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamPage;
