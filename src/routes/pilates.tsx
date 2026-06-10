import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CLINIKO_PILATES } from "@/lib/cliniko";
import pilatesImg from "@/assets/pilates.jpg.asset.json";

export const Route = createFileRoute("/pilates")({
  head: () => ({
    meta: [
      { title: "1:1 Mat-work Clinical Pilates | Maia Dell Physiotherapy" },
      {
        name: "description",
        content:
          "1:1 APPI Mat-work Clinical Pilates with Maia Dell. Safe and effective for all ages and abilities; ideal for rehab, daily function and reduced bone density.",
      },
      { property: "og:title", content: "1:1 Mat-work Clinical Pilates | Maia Dell Physiotherapy" },
      { property: "og:description", content: "1:1 APPI Mat-work Clinical Pilates targeted to your rehab needs." },
      { property: "og:url", content: "/pilates" },
      { property: "og:image", content: pilatesImg.url },
    ],
    links: [{ rel: "canonical", href: "/pilates" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageLayout>
      <section className="container-page py-12">
        <h1>1:1 Mat-work Clinical Pilates</h1>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <h2 className="mt-0">What is Mat-work Clinical Pilates?</h2>
            <p className="mt-3">
              APPI Mat-work Clinical Pilates is a form of Pilates that has been researched and modified by
              Physiotherapists.
            </p>
            <p className="mt-3">
              It further breaks down movements to be able to target and be specific to your rehab needs.
            </p>
            <p className="mt-3">It is safe and effective for all levels of ability and all ages.</p>
            <p className="mt-3">
              It can help you to rehabilitate post injury, help with your day to day functional needs, and
              help those with reduced bone density.
            </p>
            <p className="mt-3">
              The exercises are done on a mat or in standing so can easily be transferred to your home
              setting too.
            </p>
            <p className="mt-3">
              Maia teaches these 1:1 sessions so that you get all the focus and it allows for a targeted
              approach for each individual's needs.
            </p>

            <div className="mt-8">
              <a
                href={CLINIKO_PILATES}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline"
              >
                Book here for 1:1 Mat-work Pilates
              </a>
            </div>
          </div>
          <img src={pilatesImg.url} alt="" className="w-full max-w-xs rounded-lg object-cover" />
        </div>
      </section>
    </PageLayout>
  );
}
