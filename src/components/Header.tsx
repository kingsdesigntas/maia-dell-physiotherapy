import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/your-physio", label: "YOUR PHYSIO" },
  { to: "/treatments-available", label: "TREATMENTS AVAILABLE" },
  {
    to: "/headaches-and-migraines",
    label: "HEADACHES AND MIGRAINES",
    children: [{ to: "/watson-headache-approach", label: "WATSON APPROACH" }],
  },
  { to: "/contact", label: "CONTACT" },
  { to: "/book-now", label: "BOOK APPOINTMENT" },
] as const;

function linkClasses(to: string) {
  if (to === "/book-now") {
    return "rounded-md bg-primary px-4 py-2 text-xs font-medium tracking-wide text-primary-foreground shadow hover:bg-primary/90";
  }
  if (to === "/contact") {
    return "rounded-md border border-primary bg-transparent px-4 py-2 text-xs font-medium tracking-wide text-primary hover:bg-primary hover:text-primary-foreground";
  }
  return "rounded-md px-2 py-2 text-xs font-medium tracking-wide text-[var(--teal-deep)] hover:bg-muted";
}

function activeLinkClasses(to: string) {
  if (to === "/book-now") return "bg-primary/90";
  if (to === "/contact") return "bg-primary text-primary-foreground";
  return "bg-muted";
}

function mobileLinkClasses(to: string) {
  if (to === "/book-now") {
    return "rounded-md bg-primary px-3 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90";
  }
  if (to === "/contact") {
    return "rounded-md border border-primary bg-transparent px-3 py-3 text-base font-medium text-primary hover:bg-primary hover:text-primary-foreground";
  }
  return "rounded-md px-3 py-3 text-base font-medium text-[var(--teal-deep)] hover:bg-muted";
}

function mobileActiveLinkClasses(to: string) {
  if (to === "/book-now") return "bg-primary/90";
  if (to === "/contact") return "bg-primary text-primary-foreground";
  return "bg-muted";
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
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
          {NAV.map((n) =>
            "children" in n ? (
              <div key={n.to} className="group relative">
                <Link
                  to={n.to}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-2 text-xs font-medium tracking-wide text-[var(--teal-deep)] hover:bg-muted"
                  activeProps={{ className: "bg-muted" }}
                >
                  {n.label}
                  <ChevronDown size={14} aria-hidden />
                </Link>
                <div className="absolute left-0 top-full hidden min-w-[14rem] flex-col rounded-md border border-border bg-background shadow-sm group-hover:flex">
                  {n.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="px-3 py-2 text-sm font-medium text-[var(--teal-deep)] hover:bg-muted"
                      activeProps={{ className: "bg-muted" }}
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className={linkClasses(n.to)}
                activeProps={{ className: activeLinkClasses(n.to) }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ),
          )}
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
            {NAV.map((n) =>
              "children" in n ? (
                <div key={n.to}>
                  <button
                    type="button"
                    onClick={() => setExpanded((e) => (e === n.to ? null : n.to))}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-[var(--teal-deep)] hover:bg-muted"
                    aria-expanded={expanded === n.to}
                  >
                    <span>{n.label}</span>
                    <ChevronDown
                      size={16}
                      className={expanded === n.to ? "rotate-180" : ""}
                      aria-hidden
                    />
                  </button>
                  {expanded === n.to && (
                    <div className="flex flex-col pl-6">
                      <Link
                        to={n.to}
                        onClick={() => { setOpen(false); setExpanded(null); }}
                        className="rounded-md px-3 py-2 text-base font-medium text-[var(--teal-deep)] hover:bg-muted"
                        activeProps={{ className: "bg-muted" }}
                      >
                        {n.label}
                      </Link>
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => { setOpen(false); setExpanded(null); }}
                          className="rounded-md px-3 py-2 text-base font-medium text-[var(--teal-deep)] hover:bg-muted"
                          activeProps={{ className: "bg-muted" }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClasses(n.to)}
                  activeProps={{ className: mobileActiveLinkClasses(n.to) }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
