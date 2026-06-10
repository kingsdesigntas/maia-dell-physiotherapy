import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BookButtons } from "./BookButtons";
import mandala from "@/assets/mandala.jpg.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/your-physio", label: "Your Physio" },
  { to: "/treatments-available", label: "Treatments" },
  { to: "/headaches-and-migraines", label: "Headaches & Migraines" },
  { to: "/watson-headache-approach", label: "Watson Approach" },
  { to: "/pilates", label: "Pilates" },
  { to: "/book-now", label: "Book Now" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3 no-underline" onClick={() => setOpen(false)}>
          <img
            src={mandala.url}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-serif text-lg font-semibold leading-tight text-[var(--teal-deep)] sm:text-xl">
            Maia Dell Physiotherapy
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-[0.95rem] font-medium text-foreground no-underline transition hover:bg-muted"
              activeProps={{ className: "bg-muted text-[var(--teal-deep)]" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookButtons primaryLabel="Book Now" secondaryLabel="Prices" />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md border border-border bg-background lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground no-underline hover:bg-muted"
                activeProps={{ className: "bg-muted text-[var(--teal-deep)]" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3">
              <BookButtons />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
