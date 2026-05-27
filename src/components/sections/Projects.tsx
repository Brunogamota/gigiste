"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="border-t border-[#E0DDD8] px-6 md:px-12 lg:px-16 py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-4">Portfólio</p>
            <h2 className="font-[family-name:var(--font-canela)] font-light text-[#111111] leading-none tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Projetos selecionados
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22,1,0.36,1] }}
              viewport={{ once: true }}
            >
              <Link href={`/projetos/${project.id}`} className="group block">
                <div className="relative overflow-hidden mb-5 bg-[#EDECEA]" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.15em] text-[#888888] uppercase mb-2">
                      {project.index} — {project.category}
                    </p>
                    <h3 className="font-[family-name:var(--font-canela)] text-2xl font-light text-[#111111] leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-[family-name:var(--font-suisse)] text-[12px] text-[#888888] mt-1">
                      {project.location}, {project.year}
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.15em] text-[#888888] uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
