"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section
      id="contato"
      className="px-6 md:px-16 lg:px-20 py-24 md:py-36"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-12 md:gap-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">
            Contato
          </p>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-display font-light text-[var(--fg)] leading-[1.1] tracking-[-0.025em] mb-12"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
          >
            Vamos conversar<br />
            <span className="italic text-[var(--muted)]">sobre o seu projeto.</span>
          </h2>

          <div className="flex flex-col gap-6">
            {[
              { l: "Email", v: "contato@horstandco.arq.br" },
              { l: "Localização", v: "São Paulo, SP — Brasil" },
              { l: "Horário", v: "Seg–Sex, 9h–18h" },
            ].map((item) => (
              <div key={item.l}>
                <p className="font-body text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] mb-1">
                  {item.l}
                </p>
                <p className="font-body text-[13px] font-light text-[var(--fg)]">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {sent ? (
            <div className="flex flex-col gap-4 pt-2">
              <h3
                className="font-display font-light text-[var(--fg)]"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Mensagem recebida.
              </h3>
              <p className="font-body text-[13px] font-light text-[var(--muted)]">
                Retornamos em até 48h.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="flex flex-col gap-8"
            >
              {[
                { id: "name",    label: "Nome",     type: "text",  key: "name"    as const },
                { id: "email",   label: "Email",    type: "email", key: "email"   as const },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="font-body text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] block mb-2.5"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full bg-transparent font-body text-[13px] font-light text-[var(--fg)] outline-none pb-2.5 transition-colors duration-300"
                    style={{ borderBottom: "1px solid var(--border)" }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "var(--fg)")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "var(--border)")}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="font-body text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] block mb-2.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent font-body text-[13px] font-light text-[var(--fg)] outline-none pb-2.5 resize-none transition-colors duration-300"
                  style={{ borderBottom: "1px solid var(--border)" }}
                  onFocus={(e) => (e.target.style.borderBottomColor = "var(--fg)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "var(--border)")}
                />
              </div>
              <button
                type="submit"
                className="self-start font-body text-[11px] tracking-[0.2em] uppercase text-[var(--fg)] pb-0.5 transition-opacity duration-300 hover:opacity-40"
                style={{ borderBottom: "1px solid var(--fg)" }}
              >
                Enviar
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
