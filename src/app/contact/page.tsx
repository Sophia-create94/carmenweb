import type { Metadata } from "next";
import ContactData from "@/components/ContactData";
import "@/styles/ContactPage.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt, Adresse und Anfahrt zur Kinder- & Jugendarztpraxis Dr. med. Carmen Müller, Dossenheimer Landstr. 40, 69121 Heidelberg.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="page-content">
      <ContactData />
    </div>
  );
}
