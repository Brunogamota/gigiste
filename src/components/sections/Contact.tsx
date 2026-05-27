"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contato" className="border-t border-[#E0DDD8] px-6 md:px-12 lg:px-16 py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-10">Contato</p>
            <h2 className="font-[family-name:var(--font-canela)] font-light text-[#111111] leading-[1.05] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Vamos construir<br />
              <span className="italic text-[#888888]">algo juntos.</span>
            </h2>
            <div className="space-y-6 mt-12">
              {[
                { label: "Email", value: "contato@horstandco.arq.br" },
                { label: "Telefone", value: "+55 11 9999-0000" },
                { label: "Endereço", value: "São Paulo, SP" },
              ].map(item => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.15em] text-[#888888] uppercase">{item.label}</span>
                  <span className="font-[family-name:var(--font-suisse)] text-[14px] font-light text-[#111111]">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}>
            {sent ? (
              <div className="h-full flex flex-col justify-center">
                <h3 className="font-[family-name:var(--font-canela)] text-3xl font-light text-[#111111] mb-4">Mensagem recebida.</h3>
                <p className="font-[family-name:var(--font-suisse)] text-[13px] text-[#888888]">Retornamos em até 48 horas.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-8">
                {[
                  { label: "Nome", key: "name", type: "text" },
                  { label: "Email", key: "email", type: "email" },
                ].map(f => (
                  <div key={f.key}>
                    <label className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.15em] text-[#888888] uppercase block mb-3">{f.label}</label>
                    <input type={f.type} value={form[f.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-[#E0DDD8] pb-3 font-[family-name:var(--font-suisse)] text-[14px] font-light text-[#111111] outline-none focus:border-[#111111] transition-colors duration-200 placeholder:text-[#CCCCCC]"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.15em] text-[#888888] uppercase block mb-3">Mensagem</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#E0DDD8] pb-3 font-[family-name:var(--font-suisse)] text-[14px] font-light text-[#111111] outline-none focus:border-[#111111] transition-colors duration-200 resize-none" />
                </div>
                <button type="submit"
                  className="self-start font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.2em] uppercase text-[#111111] border-b border-[#111111] pb-1 hover:opacity-50 transition-opacity duration-300">
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
