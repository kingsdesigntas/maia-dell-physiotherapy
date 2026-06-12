import { Link } from "@tanstack/react-router";
import apaLogo from "@/assets/apa-logo.png.asset.json";

import { SocialLinks } from "@/components/SocialLinks";


export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-[var(--cream)]">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg">Maia Dell Physiotherapy</h3>
          <p className="text-sm">
            Headache and Migraine Clinic. Musculoskeletal physiotherapy in Bellerive and Lauderdale, Tasmania.
          </p>
          <p className="mt-3 text-sm">ABN 12198169586</p>
        </div>

        <div>
          <h3 className="mb-2 text-lg">Locations</h3>
          <address className="not-italic text-sm leading-relaxed">
            <p>13 Cambridge Road, Bellerive, Tasmania 7018</p>
            <p className="mt-2">Lauderdale Medical Centre, 444 South Arm Road, Lauderdale, Tasmania 7021</p>
          </address>
        </div>

        <div>
          <h3 className="mb-2 text-lg">Contact</h3>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:maiadell.physio@gmail.com">maiadell.physio@gmail.com</a>
          </p>
          <p className="mt-1 text-sm">Fax: 03 9959 8387</p>
          <p className="mt-1 text-sm">Health Link: maiadell</p>
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link to="/book-now">Book</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/your-physio">Your Physio</Link>
          </nav>
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium">Follow</h4>
            <SocialLinks iconSize={20} />
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center gap-4 py-6">
          <img
            src={apaLogo.url}
            alt="Australian Physiotherapy Association Member"
            className="h-16 w-auto"
            loading="lazy"
          />
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maia Dell Physiotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
