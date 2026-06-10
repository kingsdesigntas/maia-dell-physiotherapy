import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { BookButtons } from "@/components/BookButtons";
import brain from "@/assets/brain-tcc.png.asset.json";

export const Route = createFileRoute("/headaches-and-migraines")({
  head: () => ({
    meta: [
      { title: "Headaches and Migraines | Maia Dell Physiotherapy" },
      {
        name: "description",
        content:
          "Specialised assessment and treatment of headaches and migraines using the Watson Headache Approach. Slow, controlled, gentle techniques.",
      },
      { property: "og:title", content: "Headaches and Migraines | Maia Dell Physiotherapy" },
      { property: "og:description", content: "Specialised assessment and treatment of headaches and migraines." },
      { property: "og:url", content: "/headaches-and-migraines" },
      { property: "og:image", content: brain.url },
    ],
    links: [{ rel: "canonical", href: "/headaches-and-migraines" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageLayout>
      <section className="container-page py-12">
        <h1>Types and causes of headaches and migraines</h1>

        <p className="mt-4">There are many different kinds of headaches and migraines:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Tension headaches</li>
          <li>Stress related headaches</li>
          <li>Cervicogenic headaches</li>
          <li>Cluster headaches</li>
          <li>Migraine with aura</li>
          <li>Migraines without aura</li>
          <li>Menstrual migraine</li>
          <li>Vestibular migraine</li>
        </ul>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p>
              The TCC (trigemino cervical complex) situated in the lower brain stem in the upper neck,
              receives information from the upper nerves in your neck (C1, C2, C3) and from the Trigeminal
              nerve which brings information from the head and face, as well as information from the throat
              and ear (cranial nerves IX and X). There is a mixing of this information in the TCC in the
              lower brain stem; this is how pain can be referred into the head.
            </p>
            <p className="mt-4">
              It appears that in headache and migraine sufferers the TCC is sensitised or 'irritated' in
              its 'resting state' and consequently has a lower threshold for tolerating all the input it is
              receiving or stress it is put under, such as bright lights, loud noises, stress, lack of
              sleep, lack of food. The hypersensitive Trigeminal nerve can therefore result in the symptoms
              experienced in a migraine or headache.
            </p>
            <p className="mt-4">
              Dean Watson's publications from his PhD findings (Watson and Drummond) demonstrate a
              correlation between neck 'dysfunction' and headaches and migraines and that both headache and
              migraine symptoms can be reproduced and resolved from the upper cervical spine (neck).
            </p>
            <p className="mt-4">
              Through careful assessment we can discover if your neck is contributing to your headache and
              migraine symptoms. If this is found to be the case, then by treating the upper levels of the
              neck with specific slow hold techniques, the sensitivity of the TCC can be reduced and the
              underlying dysfunction at the neck can be addressed. As a result the TCC can then tolerate,
              with more ease, the stimuli each day brings.
            </p>
            <p className="mt-4 rounded-md border-l-4 border-[var(--clay)] bg-[var(--cream)] p-4">
              <strong>Important:</strong> if you are experiencing a severe onset of new or unusual neck or
              head pain (with or without associated symptoms) 'out of the blue' or different to any previous
              symptoms, please get this assessed by a Doctor and appropriately investigated prior to seeing
              Maia. It is important to rule out any other potential pathological cause of your new
              headache/neck symptoms.
            </p>
          </div>
          <img src={brain.url} alt="Diagram of the trigemino cervical complex" className="w-full max-w-xs rounded-md md:w-72" />
        </div>

        <h2 className="mt-12">Migraines</h2>
        <p className="mt-3">
          Some migraines, but not all, may be preceded by an aura/visual disturbances that may or may not
          develop into a headache that is one sided. Other associated symptoms may include light and sound
          sensitivity, nausea and/or vomiting. For a smaller percentage of sufferers they may also find
          their balance, speech, control of movement and sensation can also be affected. Aura symptoms may
          last up to an hour prior to the onset of headache. The headache symptoms may last typically from
          4 hours to 24 and are usually followed by what is often referred to as a migraine 'hangover'
          where mood, cognition and energy levels can all be affected.
        </p>

        <h2 className="mt-12">References and Quotes from Headache and Migraine Research</h2>

        <div className="mt-6 space-y-6">
          <blockquote className="rounded-md border-l-4 border-primary bg-[var(--cream)] p-5">
            <p>
              "Approximately 800 new headache patients per year are examined at our clinic. An estimated
              80% of these patients are diagnosed with cervicogenic headache. Of these patients, almost
              none are referred with this diagnosis. Physicians are not taught to consider or explore neck
              structures when investigating headaches. This results in a rarely diagnosed but common
              condition."
            </p>
            <p className="mt-3">
              "One of the confusing phenomena about the cervicogenic headache is that its symptoms can
              present as migraine headaches, tension-type headaches or even cluster headaches."
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              Rothbart P. The cervicogenic headache: A pain in the neck. Can J Diagnos 1996; 13: 64-71.
              (Dr. Peter Rothbart, Anaesthetist, Director, Rothbart Pain Management Clinic, Toronto.)
            </footer>
          </blockquote>

          <blockquote className="rounded-md border-l-4 border-primary bg-[var(--cream)] p-5">
            <p>
              "For the clinician, pain presentations in the headache patient are frequently a diagnostic
              challenge."
            </p>
            <p className="mt-3">
              "Headache of cervical origin and migraine often shows similar clinical presentations."
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              Goadsby PJ, Bartsch T. Anatomy and physiology of pain referral patterns in primary and
              cervicogenic headache disorders. Headache Currents 2005;10:42-48.
            </footer>
          </blockquote>

          <blockquote className="rounded-md border-l-4 border-primary bg-[var(--cream)] p-5">
            <p>
              "Cervicogenic headache is widespread. The neck can be the precipitant of tension-type
              headache, or be the etiology of the headache as with cervicogenic headache."
            </p>
            <p className="mt-3">
              "Cervicogenic headache has been described for many years by clinicians of varying professions
              and specialties. Most authorities agree that many patients experience neck symptoms
              associated with headache. Whether the neck is the cause of, or part of, another headache
              type, careful attention to the neck and its relationship to the headache are extremely
              important."
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              Gallagher R. Cervicogenic Headache; A special report. Expert Rev. Neurotherapeutics
              2007;7(10) 1279-83.
            </footer>
          </blockquote>

          <blockquote className="rounded-md border-l-4 border-primary bg-[var(--cream)] p-5">
            <p>
              "There is clear neuroanatomical evidence that demonstrates a relationship between the
              cervical spine and the facial and head region."
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              Mark B. Cervicogenic headache differential diagnosis and clinical management: literature
              review. J Craniomandibular Practice 1990; 8:332-338.
            </footer>
          </blockquote>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <BookButtons />
          <Link to="/watson-headache-approach">Learn about the Watson Headache® Approach →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
