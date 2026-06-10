import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/book-now", label: "BOOK APPOINTMENT" },
  { to: "/contact", label: "CONTACT" },
  { to: "/your-physio", label: "YOUR PHYSIO" },
  { to: "/treatments-available", label: "TREATMENTS AVAILABLE" },
  { to: "/headaches-and-migraines", label: "HEADACHES AND MIGRAINES" },
  { to: "/watson-headache-approach", label: "WATSON APPROACH" },
  { to: "/pilates", label: "PILATES" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page py-2 text-sm">
        <a href="mailto:maiadell.physio@gmail.com" className="text-[var(--teal-deep)]">
          maiadell.physio@gmail.com
        </a>
      </div>
      <div className="container-page flex items-center justify-between gap-4 border-t border-border py-3">
        <Link to="/" className="font-medium text-[var(--teal-deep)]" onClick={() => setOpen(false)}>
          Maia Dell Physiotherapy
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-2 py-2 text-xs font-medium tracking-wide text-[var(--teal-deep)] hover:bg-muted"
              activeProps={{ className: "bg-muted" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

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
                className="rounded-md px-3 py-3 text-base font-medium text-[var(--teal-deep)] hover:bg-muted"
                activeProps={{ className: "bg-muted" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
