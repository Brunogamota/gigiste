"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

const team = [
  {
    name: "Rafael Andrade",
    role: "Sócio-fundador & Diretor de Criação",
    bio: "FAU-USP. Yale School of Architecture. 18 anos de prática. Ex-OMA Rotterdam.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Marina Sotto",
    role: "Sócia & Diretora de Projetos",
    bio: "FAU-USP. TU Berlin. Especialista em estruturas de concreto e materialidade.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Pedro Kallas",
    role: "Arquiteto Sênior",
    bio: "Mackenzie. Mestre em paisagismo pela FAUSP. 12 anos de experiência.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export function Studio() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section id="studio" className="relative bg-[#0A0A0A]">
      {/* Top section - full image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
          alt="Horst&Co Studio"
          className="w-full h-full object-cover object-center"
          style={{ transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.6)]" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 50%, rgba(10,10,10,1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="px-6 sm:px-8 md:px-14 pb-20 sm:pb-32 md:pb-48"
      >
        {/* About text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28 -mt-24 relative z-10">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase">
                Studio
              </span>
              <div className="w-8 h-[1px] bg-[#3A3A3A]" />
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isVisible ? { y: 0 } : {}}
                transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
                className="font-display font-light text-[#F2EFE8] tracking-[-0.04em] leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}
              >
                Sobre nós
              </motion.h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-end"
          >
            <p className="font-body text-[15px] font-light text-[#9A9A9A] leading-relaxed mb-6">
              Fundado em 2010 por Rafael Andrade e Marina Sotto, o Horst&Co é um
              escritório de arquitetura contemporânea com sede em São Paulo.
            </p>
            <p className="font-body text-[13px] font-light text-[#6B6B6B] leading-relaxed">
              Nossa prática se baseia na crença de que a arquitetura tem o poder
              de transformar a vida das pessoas — não apenas esteticamente, mas
              emocionalmente. Cada projeto é um ato de responsabilidade com o
              presente e com as gerações futuras.
            </p>
          </motion.div>
        </div>

        {/* Team */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase mb-12"
          >
            Equipe principal
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                  />
                  <div className="absolute inset-0 bg-[rgba(10,10,10,0.3)]" />
                </div>
                <div className="pt-6 px-0 pb-8">
                  <h3 className="font-display text-2xl font-light text-[#F2EFE8] tracking-[-0.02em] mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-[11px] tracking-[0.1em] text-[#6B6B6B] uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="font-body text-[13px] font-light text-[#6B6B6B] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-[rgba(42,42,42,0.4)]"
        >
          <p className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase mb-10">
            Reconhecimentos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2024", title: "IAB Nacional", subtitle: "Melhor Projeto Residencial" },
              { year: "2023", title: "Casa Vogue Brasil", subtitle: "Premio Especial do Júri" },
              { year: "2022", title: "ArchDaily Brasil", subtitle: "Edifício do Ano" },
              { year: "2021", title: "Riba International", subtitle: "Shortlist — Residencial" },
            ].map((award, i) => (
              <div
                key={award.title}
                className="border border-[rgba(42,42,42,0.4)] p-6 hover:border-[rgba(107,107,107,0.3)] transition-colors duration-500"
              >
                <p className="font-body text-[10px] tracking-[0.15em] text-[#3A3A3A] mb-3">
                  {award.year}
                </p>
                <p className="font-display text-lg font-light text-[#C8C8C8] mb-1">
                  {award.title}
                </p>
                <p className="font-body text-[12px] font-light text-[#6B6B6B]">
                  {award.subtitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
