import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { BookButtons } from "@/components/BookButtons";
import {
  CLINIKO_HEADACHE_INITIAL,
  CLINIKO_STANDARD_INITIAL,
  CLINIKO_HEADACHE_FOLLOWUP_30,
  CLINIKO_STANDARD_FOLLOWUP_30,
  CLINIKO_STANDARD_FOLLOWUP_45,
} from "@/lib/cliniko";

export const Route = createFileRoute("/book-now")({
  head: () => ({
    meta: [
      { title: "Book Now | Maia Dell Physiotherapy" },
      {
        name: "description",
        content:
          "Book Now for your assessment and treatment with Maia Dell Physiotherapy. Musculoskeletal Specialist and headache and migraine specialist.",
      },
      { property: "og:title", content: "Book Now | Maia Dell Physiotherapy" },
      { property: "og:description", content: "View prices, availability and book your appointment online." },
      { property: "og:url", content: "https://maia-dell-physiotherapy.lovable.app/book-now" },
    ],
    links: [{ rel: "canonical", href: "https://maia-dell-physiotherapy.lovable.app/book-now" }],
  }),
  component: BookNow,
});

const TYPES = [
  {
    title: "Headache Initial Appointment",
    duration: "1 hour",
    body: "In depth specialist appointment. Using the evidence based Watson Headache Approach. Gentle techniques.",
    url: CLINIKO_HEADACHE_INITIAL,
  },
  {
    title: "Standard Initial Appointment",
    duration: "45 minutes",
    body: "Initial appointment to assess your issues, make a treatment plan and begin your treatment.",
    url: CLINIKO_STANDARD_FOLLOWUP_45,
  },
  {
    title: "Headache 30 Minute Follow Up Appointment",
    duration: "30 minutes",
    body: "Follow up appointment using the Watson Headache Approach.",
    url: CLINIKO_HEADACHE_FOLLOWUP_30,
  },
  {
    title: "Standard 30 Minute Follow Up Appointment",
    duration: "30 minutes",
    body: "Follow up appointment for ongoing musculoskeletal treatment.",
    url: CLINIKO_STANDARD_FOLLOWUP_30,
  },
  {
    title: "Standard 45 Minute Follow Up",
    duration: "45 minutes",
    body: "Allows more time for hands on treatment as well as exercise progression and self management planning. Ideal when dealing with more than one zone.",
    url: CLINIKO_STANDARD_FOLLOWUP_45,
  },
];

function BookNow() {
  return (
    <PageLayout>
      <section className="container-page py-12">
        <h1>Book Now</h1>
        <p className="mt-3">Please click on the link you require below.</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Private health rebate available for those with Private Health Cover.</li>
          <li>Medicare rebate available for those with the appropriate GP referral.</li>
          <li>
            Happy to see self referrals, GP referrals, workers compensation, MAIB and self funded NDIS.
          </li>
        </ul>

        <div className="mt-6">
          <BookButtons primaryLabel="Book Now (All types)" secondaryLabel="View Prices & Availability" />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {TYPES.map((t) => (
            <article key={t.title} className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="m-0">{t.title}</h3>
              <p className="mt-1 font-semibold text-[var(--clay)]">{t.duration}</p>
              <p className="mt-2 flex-1 text-base">{t.body}</p>
              <a
                href={t.url}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex min-h-12 items-center justify-center self-start rounded-md bg-primary px-5 py-2.5 text-base font-semibold text-primary-foreground no-underline"
              >
                Book this appointment
              </a>
            </article>
          ))}
        </div>


        <section className="mt-16 text-center">
          <h2>Not quite sure?</h2>
          <p className="mx-auto mt-6 text-center">
            For more information, <a href="/contact">contact me</a>.
          </p>

        </section>

      </section>
    </PageLayout>
  );
}
