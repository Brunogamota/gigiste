"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--leather)", borderTop: "1px solid rgba(163,150,141,0.15)" }}
    >
      {/* Giant name */}
      <div className="overflow-hidden px-4 md:px-8" style={{ paddingTop: "3vw" }}>
        <p
          className="font-display font-light leading-[0.82] tracking-[-0.04em] select-none"
          style={{
            fontSize: "clamp(5rem, 18vw, 22rem)",
            color: "rgba(255,255,255,0.06)",
            whiteSpace: "nowrap",
          }}
          aria-hidden
        >
          Horst &amp; Co
        </p>
      </div>

      {/* Footer bar */}
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 md:px-14 lg:px-20 py-8 gap-6"
        style={{ borderTop: "1px solid rgba(163,150,141,0.15)" }}
      >
        <p
          className="font-body tracking-[0.15em]"
          style={{ fontSize: "0.55rem", color: "var(--taupe)" }}
        >
          © {year} Horst&amp;Co Arquitetura — São Paulo, Brasil
        </p>

        <p
          className="font-display font-light tracking-[0.1em]"
          style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.3)" }}
        >
          Beyond Architecture
        </p>

        <div className="flex gap-6">
          {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-body tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
              style={{ fontSize: "0.5rem", color: "var(--taupe)" }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
