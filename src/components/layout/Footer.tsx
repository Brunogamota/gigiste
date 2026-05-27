"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-14 lg:px-20 py-12"
      style={{ borderTop: "1px solid #DEDAD4", background: "#F7F5F2" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Link
            href="/"
            className="font-display font-light tracking-[0.2em] text-[#0C0C0B] hover:opacity-50 transition-opacity duration-300"
            style={{ fontSize: "1rem" }}
          >
            Horst&amp;Co
          </Link>

          <p className="font-body text-[11px] text-[#C4BFB9] order-last md:order-none">
            © {year} Horst&amp;Co Arquitetura — São Paulo, Brasil
          </p>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {[
              { label: "Instagram", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "CAU/SP", href: "#" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-[10px] tracking-[0.18em] text-[#8A867F] uppercase hover:text-[#0C0C0B] transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
