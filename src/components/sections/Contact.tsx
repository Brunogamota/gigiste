"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

export function Contact() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = ["Residencial", "Comercial", "Institucional", "Interiores", "Consultoria"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="relative bg-[#0A0A0A]">
      {/* CTA Banner */}
      <div className="relative overflow-hidden h-[50vh] md:h-[60vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Horst&Co"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.75)]" />
        <div className="relative z-10 px-8 md:px-14 w-full">
          <div className="max-w-[1000px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
            >
              <p className="font-body text-[9px] tracking-[0.25em] text-[#6B6B6B] uppercase mb-8">
                Vamos construir juntos
              </p>
              <h2
                className="font-display font-light text-[#F2EFE8] tracking-[-0.04em] leading-[0.92] mb-10"
                style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}
              >
                Seu projeto
                <br />
                <span className="italic text-[#9A9A9A]">começa aqui.</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <a href="#form" className="btn-premium">
                  <span>Iniciar conversa</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="tel:+5511999900000"
                  className="flex items-center gap-3 font-body text-[11px] tracking-[0.15em] text-[#6B6B6B] uppercase hover:text-[#C8C8C8] transition-colors duration-300"
                >
                  <div className="w-[1px] h-8 bg-[#3A3A3A]" />
                  +55 11 9999-0000
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div
        id="form"
        ref={ref as React.RefObject<HTMLDivElement>}
        className="px-8 md:px-14 py-24 md:py-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1400px] mx-auto">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase mb-10">
              Contato
            </p>
            <div className="space-y-10">
              {[
                { label: "Email", value: "contato@horstandco.arq.br", href: "mailto:contato@horstandco.arq.br" },
                { label: "Telefone", value: "+55 11 9999-0000", href: "tel:+5511999900000" },
                { label: "Endereço", value: "Rua Oscar Freire, 123\nSão Paulo, SP 01426-001", href: "#" },
                { label: "Atendimento", value: "Segunda a sexta\n9h — 18h", href: "#" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-body text-[10px] tracking-[0.15em] text-[#3A3A3A] uppercase mb-2">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="font-body text-[14px] font-light text-[#9A9A9A] hover:text-[#C8C8C8] transition-colors duration-300 whitespace-pre-line"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col justify-center"
              >
                <p className="font-body text-[9px] tracking-[0.25em] text-[#6B6B6B] uppercase mb-6">
                  Mensagem enviada
                </p>
                <h3 className="font-display text-4xl font-light text-[#F2EFE8] tracking-[-0.03em] mb-4">
                  Obrigado pelo contato.
                </h3>
                <p className="font-body text-[14px] font-light text-[#6B6B6B] leading-relaxed">
                  Retornaremos em até 48 horas com atenção ao que você compartilhou.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <FormField
                  label="Nome completo"
                  value={formState.name}
                  onChange={(v) => setFormState({ ...formState, name: v })}
                  required
                />
                <FormField
                  label="Email"
                  type="email"
                  value={formState.email}
                  onChange={(v) => setFormState({ ...formState, email: v })}
                  required
                />
                <div>
                  <label className="font-body text-[10px] tracking-[0.15em] text-[#3A3A3A] uppercase block mb-3">
                    Tipo de projeto
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormState({ ...formState, type })}
                        className={`font-body text-[11px] tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-300 ${
                          formState.type === type
                            ? "border-[rgba(200,200,200,0.4)] text-[#C8C8C8] bg-[rgba(200,200,200,0.05)]"
                            : "border-[rgba(42,42,42,0.6)] text-[#6B6B6B] hover:border-[rgba(107,107,107,0.4)] hover:text-[#9A9A9A]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <FormField
                  label="Mensagem"
                  value={formState.message}
                  onChange={(v) => setFormState({ ...formState, message: v })}
                  multiline
                />
                <button type="submit" className="btn-premium w-full justify-center">
                  <span>Enviar mensagem</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  type = "text",
  required,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const className = `w-full bg-transparent border-b ${
    focused ? "border-[rgba(200,200,200,0.3)]" : "border-[rgba(42,42,42,0.6)]"
  } py-3 font-body text-[14px] font-light text-[#C8C8C8] outline-none transition-colors duration-300 placeholder:text-[#3A3A3A] resize-none`;

  return (
    <div>
      <label className="font-body text-[10px] tracking-[0.15em] text-[#3A3A3A] uppercase block mb-3">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={4}
          className={className}
          required={required}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={className}
          required={required}
        />
      )}
    </div>
  );
}
