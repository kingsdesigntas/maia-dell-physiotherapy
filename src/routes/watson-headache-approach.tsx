import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { BookButtons } from "@/components/BookButtons";
import spine from "@/assets/cervical-spine.png";

export const Route = createFileRoute("/watson-headache-approach")({
  head: () => ({
    meta: [
      { title: "Watson Headache® Approach | Maia Dell Physiotherapy" },
      {
        name: "description",
        content:
          "The Watson Headache® Approach — a scientifically researched protocol for assessment and management of the upper cervical spine in headache and migraine.",
      },
      { property: "og:title", content: "Watson Headache® Approach | Maia Dell Physiotherapy" },
      { property: "og:description", content: "Skilled assessment and management of the upper cervical spine for headache and migraine." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://maia-dell-physiotherapy.lovable.app/watson-headache-approach" },
      { property: "og:image", content: spine },
    ],
    links: [{ rel: "canonical", href: "https://maia-dell-physiotherapy.lovable.app/watson-headache-approach" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "The Watson Headache® Approach",
          description:
            "A scientifically researched protocol for skilled assessment and management of the upper cervical spine in cervicogenic and primary headache.",
          image: spine,
          author: { "@type": "Person", name: "Maia Dell" },
          publisher: { "@type": "MedicalBusiness", name: "Maia Dell Physiotherapy" },
          mainEntityOfPage: "https://maia-dell-physiotherapy.lovable.app/watson-headache-approach",
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageLayout>
      <section className="container-page py-12">
        <h1>The Watson Headache® Approach</h1>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p>
              Your initial appointment will last an hour to allow Maia to fully assess what is driving
              your headache in order to treat the structures responsible, not just the symptoms.
            </p>
            <p className="mt-4">By finding out details of your specific headache such as:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Intensity</li>
              <li>Duration</li>
              <li>Frequency</li>
              <li>Location</li>
            </ul>
            <p className="mt-4">
              ...we can quickly assess how your treatment is progressing. Often where you feel the pain is
              not where it is coming from. With a detailed assessment the goal is to find the source and
              demonstrate this to you during the consultation.
            </p>

            <p className="mt-6">
              Maia is a <strong>Watson Headache® Certified Practitioner</strong>.
            </p>
            <p className="mt-2">
              <a href="https://www.WatsonHeadacheInstitute.com" target="_blank" rel="noopener">
                www.WatsonHeadacheInstitute.com
              </a>
            </p>

            <p className="mt-6">
              The course was based on the Watson Headache® Approach, a protocol for the skilled assessment
              and management of the upper cervical (neck) spine in Cervicogenic and Primary Headache, and
              related conditions in which the underlying dysfunction is sensitisation of the lower
              brainstem. The Watson Headache® Approach is recognised as a scientifically researched method
              of examination as well as a comprehensive clinical management system. For further
              information, go to:{" "}
              <a href="https://www.WatsonHeadacheApproach.com" target="_blank" rel="noopener">
                www.WatsonHeadacheApproach.com
              </a>
              .
            </p>
          </div>
          <img src={spine} alt="Diagram of the upper cervical spine" className="w-full max-w-xs rounded-md md:w-72" />
        </div>

        <div className="mt-10">
          <BookButtons primaryLabel="Book a Headache Appointment" />
        </div>
      </section>
    </PageLayout>
  );
}
