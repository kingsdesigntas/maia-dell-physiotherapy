import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { BookButtons } from "@/components/BookButtons";
import svcHeadache from "@/assets/service-headache.jpg";
import svcPhysio from "@/assets/service-physio.jpg";
import svcRehab from "@/assets/service-rehab.jpg";

export const Route = createFileRoute("/treatments-available")({
  head: () => ({
    meta: [
      { title: "Treatments Available | Maia Dell Physiotherapy" },
      {
        name: "description",
        content:
          "Physiotherapy services including headache & migraine treatment, musculoskeletal physio, dry needling and rehab Pilates sessions in Bellerive and Lauderdale.",
      },
      { property: "og:title", content: "Treatments Available | Maia Dell Physiotherapy" },
      { property: "og:description", content: "Headache & migraine treatment, physiotherapy, dry needling and rehab Pilates." },
      { property: "og:url", content: "https://maia-dell-physiotherapy.lovable.app/treatments-available" },
    ],
    links: [{ rel: "canonical", href: "https://maia-dell-physiotherapy.lovable.app/treatments-available" }],
  }),
  component: Treatments,
});

function Treatments() {
  return (
    <PageLayout>
      <section className="container-page py-12">
        <h1>Physiotherapy Services</h1>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <article className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img src={svcHeadache} alt="" className="aspect-[3/2] w-full object-cover" />
            <div className="p-6">
              <h2 className="m-0 text-xl">Headaches & Migraines</h2>
              <p className="mt-3">
                A targeted approach to assess and treat your headaches and migraines using gentle evidence
                based techniques. Maia is a <strong>Watson Headache® Certified Practitioner</strong> and has
                attended in person the Watson Headache Approach Levels 1 & 2 and the Level 3 certification.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img src={svcPhysio} alt="" className="aspect-[3/2] w-full object-cover" />
            <div className="p-6">
              <h2 className="m-0 text-xl">Physiotherapy and Dry Needling</h2>
              <p className="mt-3">
                Neck, back and shoulder problems; joint pain and injuries; arthritis and chronic conditions.
                Improving function, reducing pain, targeted exercises and teaching you self management
                skills to help you to move better and feel better.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img src={svcRehab} alt="" className="aspect-[3/2] w-full object-cover" />
            <div className="p-6">
              <h2 className="m-0 text-xl">Rehab Pilates Sessions</h2>
              <p className="mt-3">Targeted exercise programmes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>To improve your general day to day comfort and ability to perform daily tasks;</li>
                <li>To reach your goals of returning to more physical challenges or sports;</li>
                <li>To aid your rehabilitation pre or post surgery.</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-12 text-center">
          <BookButtons />
        </div>
      </section>
    </PageLayout>
  );
}
