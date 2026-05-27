"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section
      id="contato"
      className="px-6 md:px-12 lg:px-16 py-24 md:py-36"
      style={{ borderTop: "1px solid #E0DDD8" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-10">
              Contato
            </p>
            <h2
              className="font-display font-light text-[#111111] leading-[1.05] tracking-[-0.02em] mb-12"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Vamos construir<br />
              <span className="italic text-[#888888]">algo juntos.</span>
            </h2>

            <div className="flex flex-col gap-7">
              {[
                { label: "Email", value: "contato@horstandco.arq.br" },
                { label: "Telefone", value: "+55 11 9999-0000" },
                { label: "Localização", value: "São Paulo, SP — Brasil" },
                { label: "Horário", value: "Segunda a sexta, 9h–18h" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-body text-[10px] tracking-[0.15em] text-[#888888] uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm font-light text-[#111111]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div className="flex flex-col justify-center h-full gap-4 py-12">
                <h3 className="font-display text-3xl font-light text-[#111111]">
                  Mensagem recebida.
                </h3>
                <p className="font-body text-sm font-light text-[#888888]">
                  Retornamos em até 48 horas.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-8"
              >
                {/* Nome */}
                <div>
                  <label className="font-body text-[10px] tracking-[0.15em] text-[#888888] uppercase block mb-3">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-transparent font-body text-sm font-light text-[#111111] outline-none transition-colors duration-200 pb-3"
                    style={{ borderBottom: "1px solid #E0DDD8" }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#111111")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#E0DDD8")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-[10px] tracking-[0.15em] text-[#888888] uppercase block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-transparent font-body text-sm font-light text-[#111111] outline-none transition-colors duration-200 pb-3"
                    style={{ borderBottom: "1px solid #E0DDD8" }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#111111")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#E0DDD8")}
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label className="font-body text-[10px] tracking-[0.15em] text-[#888888] uppercase block mb-3">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent font-body text-sm font-light text-[#111111] outline-none transition-colors duration-200 pb-3 resize-none"
                    style={{ borderBottom: "1px solid #E0DDD8" }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#111111")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#E0DDD8")}
                  />
                </div>

                <button
                  type="submit"
                  className="self-start font-body text-[10px] tracking-[0.2em] uppercase text-[#111111] pb-1 hover:opacity-40 transition-opacity duration-300"
                  style={{ borderBottom: "1px solid #111111" }}
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
