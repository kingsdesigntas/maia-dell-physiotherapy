import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { BookButtons } from "@/components/BookButtons";
import mandala from "@/assets/mandala.jpg.asset.json";
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
      { property: "og:image", content: mandala.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <section className="container-page py-12 text-center md:py-16">
        <img
          src={mandala.url}
          alt="Maia Dell Physiotherapy logo"
          width={220}
          height={220}
          className="mx-auto h-auto w-44 md:w-56"
        />
        <h1 className="mt-8">
          MAIA DELL PHYSIOTHERAPY,
          <br />
          HEADACHE AND MIGRAINE CLINIC
        </h1>
        <p className="mx-auto mt-3 text-xl text-[var(--teal-deep)] md:text-2xl">
          Bellerive and Lauderdale
        </p>
        <p className="mx-auto mt-6">
          <a href="mailto:maiadell.physio@gmail.com">maiadell.physio@gmail.com</a>
        </p>
        <div className="mt-8 flex justify-center">
          <BookButtons />
        </div>
      </section>

      <section className="container-page py-12 text-center">
        <h2>PHYSIOTHERAPY SERVICES</h2>
        <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
          <ServiceCard
            img={svcHeadache.url}
            title="Headaches & Migraines"
            body="A targeted approach to assess and treat your headaches and migraines using gentle evidence based techniques. Maia is a Watson Headache® Certified Practitioner."
            href="/headaches-and-migraines"
          />
          <ServiceCard
            img={svcPhysio.url}
            title="Physiotherapy & Dry Needling"
            body="Neck, back and shoulder problems; joint pain and injuries; arthritis and chronic conditions. Improving function, reducing pain, targeted exercises and self management skills to help you move and feel better."
            href="/treatments-available"
          />
          <ServiceCard
            img={svcRehab.url}
            title="Rehabilitation"
            body="Targeted exercise programmes to improve day to day comfort, to reach goals of returning to physical challenges or sports, and to aid your rehabilitation pre or post surgery."
            href="/treatments-available"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-center">
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
        <img src={apaLogo.url} alt="Australian Physiotherapy Association member" className="h-auto w-48 self-start" />
      </section>

      <section className="container-page py-12 text-center">
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
  img: string;
  title: string;
  body: string;
  href: "/headaches-and-migraines" | "/treatments-available";
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:shadow-md">
      <img src={img} alt="" className="aspect-[3/2] w-full object-cover" />
      <div className="p-6">
        <h3 className="m-0">{title}</h3>
        <p className="mt-3">{body}</p>
        <Link to={href} className="mt-4 inline-block font-semibold">
          Learn more →
        </Link>
      </div>
    </article>
  );
}
