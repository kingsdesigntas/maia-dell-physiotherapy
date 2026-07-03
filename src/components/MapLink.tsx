import { ExternalLink } from "lucide-react";

export function MapLink({ query }: { query: string }) {
  const href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-semibold"
    >
      View Google Map
      <ExternalLink size={16} aria-hidden="true" />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
