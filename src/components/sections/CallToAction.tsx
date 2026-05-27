"use client";

import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#1A1814" }}
    >
      <div className="px-6 md:px-14 lg:px-20 py-32 md:py-52 relative z-10">
        <div className="max-w-[1320px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="font-body text-[10px] tracking-[0.28em] uppercase mb-10"
              style={{ color: "rgba(247,245,242,0.35)" }}
            >
              Iniciar um projeto
            </p>

            <h2
              className="font-display font-light leading-[1.05] tracking-[-0.03em] mb-14"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 7.5rem)",
                color: "#F7F5F2",
                maxWidth: "16ch",
              }}
            >
              Vamos criar{" "}
              <span className="italic" style={{ color: "rgba(247,245,242,0.45)" }}>
                algo
              </span>
              <br />
              que permanece.
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
              <a
                href="#contato"
                className="inline-flex items-center gap-4 font-body text-[11px] tracking-[0.22em] uppercase py-4 px-8 transition-all duration-400 hover:bg-[#F7F5F2] hover:text-[#0C0C0B]"
                style={{
                  color: "#F7F5F2",
                  border: "1px solid rgba(247,245,242,0.25)",
                  transitionDuration: "400ms",
                }}
              >
                Entrar em contato
              </a>
              <a
                href="#projetos"
                className="font-body text-[11px] tracking-[0.18em] uppercase transition-opacity duration-300 hover:opacity-40"
                style={{ color: "rgba(247,245,242,0.5)" }}
              >
                Ver todos os projetos →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 50%, rgba(247,245,242,0.025) 0%, transparent 60%)",
        }}
      />
    </section>
  );
}
