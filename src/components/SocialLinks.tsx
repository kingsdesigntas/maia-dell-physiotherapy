import { Facebook, Instagram } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/maiaphysio/",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/maia_physio/",
    Icon: Instagram,
  },
] as const;

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

export function SocialLinks({ className = "", iconSize = 18 }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex items-center justify-center text-[var(--teal-deep)] hover:opacity-75"
          >
            <Icon size={iconSize} aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
