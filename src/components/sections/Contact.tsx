"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section
      id="contato"
      className="px-6 md:px-14 lg:px-20 py-28 md:py-40"
      style={{ borderTop: "1px solid #DEDAD4" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] text-[#8A867F] uppercase mb-10">
              Contato
            </p>
            <h2
              className="font-display font-light text-[#0C0C0B] leading-[1.08] tracking-[-0.025em] mb-14"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.6rem)" }}
            >
              Vamos conversar
              <br />
              <span className="italic text-[#8A867F]">sobre o seu projeto.</span>
            </h2>

            <div className="flex flex-col gap-7">
              {[
                { label: "Email", value: "contato@horstandco.arq.br" },
                { label: "Telefone", value: "+55 11 9999-0000" },
                { label: "Localização", value: "São Paulo, SP — Brasil" },
                { label: "Horário", value: "Seg–Sex, 9h–18h" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-body text-[10px] tracking-[0.14em] text-[#8A867F] uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm font-light text-[#0C0C0B]">
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
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div className="flex flex-col justify-center gap-5 py-16">
                <h3
                  className="font-display font-light text-[#0C0C0B]"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                >
                  Mensagem recebida.
                </h3>
                <p className="font-body text-sm font-light text-[#8A867F]">
                  Retornamos em até 48 horas.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-9"
              >
                {[
                  { id: "name", label: "Nome", type: "text", key: "name" as const },
                  { id: "email", label: "Email", type: "email", key: "email" as const },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="font-body text-[10px] tracking-[0.14em] text-[#8A867F] uppercase block mb-3"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      required
                      className="w-full bg-transparent font-body text-sm font-light text-[#0C0C0B] outline-none pb-3 transition-colors duration-300"
                      style={{ borderBottom: "1px solid #DEDAD4" }}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#0C0C0B")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "#DEDAD4")}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="font-body text-[10px] tracking-[0.14em] text-[#8A867F] uppercase block mb-3"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent font-body text-sm font-light text-[#0C0C0B] outline-none pb-3 resize-none transition-colors duration-300"
                    style={{ borderBottom: "1px solid #DEDAD4" }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#0C0C0B")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "#DEDAD4")}
                  />
                </div>

                <button
                  type="submit"
                  className="self-start font-body text-[10px] tracking-[0.22em] uppercase text-[#0C0C0B] pb-1 transition-opacity duration-300 hover:opacity-40"
                  style={{ borderBottom: "1px solid #0C0C0B" }}
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
