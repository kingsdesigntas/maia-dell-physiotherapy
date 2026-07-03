import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Maia Dell Physiotherapy" },
      { name: "description", content: "Contact Maia Dell Physiotherapy in Bellerive and Lauderdale, Tasmania." },
      { property: "og:title", content: "Contact | Maia Dell Physiotherapy" },
      { property: "og:description", content: "Get in touch about appointments, referrals or general enquiries." },
      { property: "og:url", content: "https://maia-dell-physiotherapy.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://maia-dell-physiotherapy.lovable.app/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageLayout>
      <section className="container-page py-12">
        <h1>Contact me</h1>
        <p className="mt-3">If you have any questions please contact me using the form below.</p>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <aside className="rounded-lg border border-border bg-[var(--cream)] p-6">
            <h2 className="m-0 text-xl">Medical professionals</h2>
            <p className="mt-2 text-base">
              GPs, Doctors and Radiologists may send confidential reports, letters and referrals via:
            </p>
            <ul className="mt-2 space-y-1 text-base">
              <li><strong>Fax:</strong> 03 9959 8387</li>
              <li><strong>Health Link name:</strong> maiadell</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:admin@maiadellphysiotherapy.com.au">admin@maiadellphysiotherapy.com.au</a>
              </li>
            </ul>

            <h2 className="mt-6 text-xl">Locations</h2>
            <address className="mt-2 not-italic text-base leading-relaxed">
              <p>13 Cambridge Road, Bellerive, Tasmania 7018</p>
              <p className="mt-1">
                <MapLink query="13 Cambridge Road, Bellerive, Tasmania 7018" />
              </p>
              <p className="mt-3">Lauderdale Medical Centre, 444 South Arm Road, Lauderdale, Tasmania 7021</p>
              <p className="mt-1">
                <MapLink query="Lauderdale Medical Centre, 444 South Arm Road, Lauderdale, Tasmania 7021" />
              </p>
            </address>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
