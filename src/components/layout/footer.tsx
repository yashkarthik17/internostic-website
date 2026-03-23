import Link from "next/link";
import Image from "next/image";

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
    <footer className="relative bg-[#1A1A2E] text-white">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#7A1C2E]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
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
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Building the future of tax resolution technology. Making
              affordable tax help accessible to every American.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-8 w-8 rounded-full bg-white/[0.06] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
                <svg className="w-3.5 h-3.5 text-white/50" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="h-8 w-8 rounded-full bg-white/[0.06] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
                <svg className="w-3.5 h-3.5 text-white/50" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold text-white/80 mb-5 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/40 hover:text-[#C4956A] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white/80 mb-5 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#C4956A] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-white/80 mb-5 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#C4956A] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <p>555 Anton Blvd, Costa Mesa, CA 92626 | 805-791-6660</p>
          <p>&copy; 2026 Internostic, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
