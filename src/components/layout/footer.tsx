import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const productLinks = [
  { label: "Blast Tax Debt", href: "https://blasttax.com" },
  { label: "Blast Tax Prep", href: "https://blasttax.com" },
  { label: "Blast Tax Business", href: "https://blasttax.com" },
  { label: "Blast Tax Practitioner", href: "https://blasttax.com" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Tagline */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Internostic"
              width={140}
              height={35}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Building the future of tax resolution technology. Making
              affordable tax help accessible to every American.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>555 Anton Blvd, Costa Mesa, CA 92626 | 805-791-6660</p>
          <p>&copy; 2026 Internostic, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
