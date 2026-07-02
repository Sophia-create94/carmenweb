import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vor Ihrem Besuch",
  description:
    "Wichtige Hinweise für Ihren Besuch in der Kinderarztpraxis Dr. Carmen Müller: Terminvereinbarung, mitzubringende Unterlagen und Parkmöglichkeiten.",
  alternates: { canonical: "/vor-ihrem-besuch" },
};

export default function BeforeYouComePage() {
  return (
    <div className="page-content">
      <h2 className="page-title">Vor Ihrem Besuch</h2>

      <p>
        Wir bitten Sie, nur nach telefonischer Terminvereinbarung in die Praxis
        zu kommen.
      </p>

      <p>
        Bitte denken Sie daran, bei jedem Besuch die Versichertenkarte, gelbes
        U-Heft und Impfpass, sowie ein Handtuch für Ihr Kind mitzubringen.
      </p>

      <p>Parkplätze sind auf dem Penny Parkplatz vorhanden.</p>
    </div>
  );
}
