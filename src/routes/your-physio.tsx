import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { BookButtons } from "@/components/BookButtons";
import { MapLink } from "@/components/MapLink";
import maia from "@/assets/maia.jpg";

export const Route = createFileRoute("/your-physio")({
  head: () => ({
    meta: [
      { title: "Your Physio | Maia Dell Physiotherapy" },
      {
        name: "description",
        content:
          "Maia Dell — Physiotherapist with 25+ years experience and Watson Headache® Certified Practitioner. Bellerive & Lauderdale, Tasmania.",
      },
      { property: "og:title", content: "Your Physio | Maia Dell Physiotherapy" },
      { property: "og:description", content: "Meet Maia Dell — experienced physiotherapist and Watson Headache® Certified Practitioner." },
      { property: "og:url", content: "https://maia-dell-physiotherapy.lovable.app/your-physio" },
      { property: "og:image", content: maia },
    ],
    links: [{ rel: "canonical", href: "https://maia-dell-physiotherapy.lovable.app/your-physio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Maia Dell",
          jobTitle: "Physiotherapist",
          description:
            "Physiotherapist with over 25 years of experience and a Watson Headache® Certified Practitioner working in Bellerive and Lauderdale, Tasmania.",
          worksFor: { "@type": "MedicalBusiness", name: "Maia Dell Physiotherapy" },
          image: maia,
          url: "https://maia-dell-physiotherapy.lovable.app/your-physio",
        }),
      },
    ],
  }),
  component: YourPhysio,
});

function YourPhysio() {
  return (
    <PageLayout>
      <section className="container-page py-12">
        <h1>Maia Dell Physiotherapy</h1>
        <p className="mt-2 font-serif text-xl text-[var(--teal)]">Headache and Migraine Clinic</p>

        <div className="mt-8 grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <img
            src={maia}
            alt="Maia Dell, Physiotherapist"
            className="w-full max-w-xs rounded-lg object-cover shadow-sm"
          />
          <div>
            <p>Maia currently works in Bellerive and Lauderdale, Tasmania.</p>
            <p className="mt-4">
              Maia is a Physiotherapist with over 25 years of experience. She has worked in both the UK
              and Australia, in the public system and in private practice.
            </p>

            <h2 className="mt-8">Maia specialises in assessing and treating:</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Headaches and Migraines — Maia is a Watson Headache® Certified Practitioner</li>
              <li>Neck, back, shoulder and joint pain / injuries</li>
              <li>Rehabilitation following surgery or injury</li>
              <li>Rheumatological conditions</li>
            </ul>

            <h2 className="mt-8">Maia is also certified and experienced in:</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Dry needling as an adjunct to treatment.</li>
              <li>
                Teaching mat-work Pilates. She offers 1:1 mat work Clinical Pilates sessions to target
                rehab and to help you move and feel better.
              </li>
            </ul>

            <p className="mt-6">Maia is a certified APA member and registered under AHPRA.</p>
            <p className="mt-4">
              Maia is also a Mum and enjoys going on family camping trips, getting stuck into a good
              book, running with her Kelpie, tennis and skiing.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2>Easy Online Bookings</h2>
          <div className="mt-4">
            <BookButtons />
          </div>
        </div>

        <div className="mt-10">
          <h2>Locations</h2>
          <p className="mt-2">I am now working from Bellerive and Lauderdale.</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="m-0">Bellerive</h3>
              <p className="mt-2">13 Cambridge Road, Bellerive, Tasmania 7018</p>
              <p className="mt-1">
                <MapLink query="13 Cambridge Road, Bellerive, Tasmania 7018" />
              </p>
              <p className="mt-1 text-base">In the historic Police station building.</p>
              <p className="mt-1 text-base">
                Free parking and access at the rear of the building via the Community Arts Centre on
                Petchy Street or on the road out front.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="m-0">Lauderdale</h3>
              <p className="mt-2">Lauderdale Medical Centre, 444 South Arm Road, Lauderdale, Tasmania 7021</p>
              <p className="mt-1">
                <MapLink query="Lauderdale Medical Centre, 444 South Arm Road, Lauderdale, Tasmania 7021" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
