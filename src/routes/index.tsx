import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { BookButtons } from "@/components/BookButtons";
import hero from "@/assets/hero.jpg.asset.json";
import apaLogo from "@/assets/apa-logo.png.asset.json";
import svcHeadache from "@/assets/service-headache.jpg.asset.json";
import svcPhysio from "@/assets/service-physio.jpg.asset.json";
import svcRehab from "@/assets/service-rehab.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maia Dell Physiotherapy, Headache and Migraine Clinic, Bellerive" },
      {
        name: "description",
        content:
          "Maia Dell Physiotherapy provides Physiotherapy for headaches and migraine, neck and back pain, shoulder and joint pain or injuries. Also offering Rehab mat-work Pilates small group sessions and dry needling. Book online for your appointment. Bellerive, Hobart, Tasmania.",
      },
      { property: "og:title", content: "Maia Dell Physiotherapy, Headache and Migraine Clinic, Bellerive" },
      { property: "og:description", content: "Physiotherapy for headaches, migraines, neck, back and shoulder pain. Bellerive & Lauderdale, Tasmania." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero.url} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[var(--teal-deep)]/55" />
        </div>
        <div className="container-page relative py-20 text-center md:py-28">
          <h1 className="text-white drop-shadow">
            Maia Dell Physiotherapy
          </h1>
          <p className="mx-auto mt-3 max-w-2xl font-serif text-xl text-white/95 md:text-2xl">
            Headache and Migraine Clinic — Bellerive and Lauderdale
          </p>
          <div className="mt-8 flex justify-center">
            <BookButtons />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-16">
        <h2 className="text-center">Physiotherapy Services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ServiceCard
            img={svcHeadache}
            title="Headaches & Migraines"
            body="A targeted approach to assess and treat your headaches and migraines using gentle evidence based techniques. Maia is a Watson Headache® Certified Practitioner."
            href="/headaches-and-migraines"
          />
          <ServiceCard
            img={svcPhysio}
            title="Physiotherapy and Dry Needling"
            body="Neck, back and shoulder problems; joint pain and injuries; arthritis and chronic conditions. Improving function, reducing pain, targeted exercises and self management skills to help you move and feel better."
            href="/treatments-available"
          />
          <ServiceCard
            img={svcRehab}
            title="Rehabilitation"
            body="Targeted exercise programmes to improve day to day comfort, to reach goals of returning to physical challenges or sports, and to aid your rehabilitation pre or post surgery."
            href="/pilates"
          />
        </div>
      </section>

      {/* All accepted */}
      <section className="bg-[var(--cream)] py-16">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2>All Accepted</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Private health rebate is available.</li>
              <li>GP referrals are always welcome but not required.</li>
              <li>
                Chronic Care Management Plan (CCMP) referrals from your GP for Medicare rebated appointments are welcomed.
              </li>
              <li>
                For Medicare rebated appointments you are required to pay in full at the time of your appointment and then you will receive the Medicare rebate back on the spot. Please remember to bring your Medicare card and linked debit card to your appointment.
              </li>
              <li>
                Your GP may fax referrals through safely on 03 9959 8387, or via Health Link (user name: maiadell), or via email:{" "}
                <a href="mailto:maiadell.physio@gmail.com">maiadell.physio@gmail.com</a>.
              </li>
              <li>NDIS patients who have self managed funds are welcome.</li>
              <li>Workers compensation and MAIB also accepted.</li>
            </ul>
          </div>
          <img src={apaLogo.url} alt="Australian Physiotherapy Association member" className="h-auto w-56 self-start" />
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <h2>Ready to book?</h2>
        <p className="mx-auto mt-3">
          Please click below to view appointment types, prices and availability.
        </p>
        <div className="mt-6 flex justify-center">
          <BookButtons />
        </div>
        <p className="mt-6">
          Need more information? <Link to="/contact">Contact me</Link>.
        </p>
      </section>
    </PageLayout>
  );
}

function ServiceCard({
  img,
  title,
  body,
  href,
}: {
  img: { url: string };
  title: string;
  body: string;
  href: "/headaches-and-migraines" | "/treatments-available" | "/pilates";
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <img src={img.url} alt="" className="aspect-[3/2] w-full object-cover" />
      <div className="p-6">
        <h3 className="m-0">{title}</h3>
        <p className="mt-3 text-base">{body}</p>
        <Link
          to={href}
          className="mt-4 inline-block font-semibold"
        >
          Learn more →
        </Link>
      </div>
    </article>
  );
}
