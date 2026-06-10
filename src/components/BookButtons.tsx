import { CLINIKO_MAIN } from "@/lib/cliniko";

type Props = {
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
};

export function BookButtons({
  primaryLabel = "Book Now",
  secondaryLabel = "View Prices & Availability",
  className = "",
}: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={CLINIKO_MAIN}
        target="_blank"
        rel="noopener"
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline shadow-sm transition hover:bg-[var(--teal-deep)]"
      >
        {primaryLabel}
      </a>
      <a
        href={CLINIKO_MAIN}
        target="_blank"
        rel="noopener"
        className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary no-underline transition hover:bg-primary hover:text-primary-foreground"
      >
        {secondaryLabel}
      </a>
    </div>
  );
}
