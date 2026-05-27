"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  nextProject: Project;
}

export function ProjectDetail({ project, nextProject }: Props) {
  return (
    <article style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <motion.div
        className="relative w-full bg-[#D8D3CC] overflow-hidden"
        style={{ height: "70svh", minHeight: 400 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(15,12,10,0.3) 100%)" }}
        />
      </motion.div>

      {/* Header info */}
      <div
        className="px-6 md:px-14 lg:px-20 py-14 md:py-20"
        style={{ borderBottom: "1px solid #DEDAD4" }}
      >
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] tracking-[0.22em] text-[#8A867F] uppercase mb-5">
              {project.index} — {project.category}
            </p>
            <h1
              className="font-display font-light text-[#0C0C0B] leading-[1.0] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
            >
              {project.title}
            </h1>
            <p
              className="font-display italic text-[#8A867F] mt-3"
              style={{ fontSize: "clamp(1rem, 2vw, 1.6rem)" }}
            >
              {project.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center gap-4"
          >
            {[
              { l: "Localização", v: project.location },
              { l: "Área", v: project.area },
              { l: "Ano", v: project.year },
              { l: "Categoria", v: project.category },
            ].map((item) => (
              <div
                key={item.l}
                className="flex justify-between pb-4"
                style={{ borderBottom: "1px solid #DEDAD4" }}
              >
                <span className="font-body text-[10px] tracking-[0.14em] text-[#8A867F] uppercase">
                  {item.l}
                </span>
                <span className="font-body text-sm font-light text-[#0C0C0B]">
                  {item.v}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Long description */}
      <div className="px-6 md:px-14 lg:px-20 py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto">
          <div className="max-w-[680px]">
            <motion.p
              className="font-display font-light text-[#0C0C0B] leading-[1.45]"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.65rem)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.longDescription}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-6 md:px-14 lg:px-20 pb-20">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.images.slice(1).map((img, i) => (
            <motion.div
              key={i}
              className="relative bg-[#D8D3CC] overflow-hidden"
              style={{ aspectRatio: "4/3" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i % 2 === 1 ? 0.08 : 0 }}
            >
              <img
                src={img}
                alt={`${project.title} — imagem ${i + 2}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="px-6 md:px-14 lg:px-20 pb-16">
          <div className="max-w-[1320px] mx-auto flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] tracking-[0.12em] text-[#8A867F] uppercase px-4 py-2"
                style={{ border: "1px solid #DEDAD4" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Next project */}
      <div
        className="px-6 md:px-14 lg:px-20 py-16 md:py-24"
        style={{ borderTop: "1px solid #DEDAD4" }}
      >
        <div className="max-w-[1320px] mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] text-[#8A867F] uppercase mb-7">
            Próximo projeto
          </p>
          <Link
            href={`/projetos/${nextProject.id}`}
            className="group flex items-center justify-between"
          >
            <h3
              className="font-display font-light text-[#0C0C0B] leading-none tracking-[-0.025em] transition-colors duration-400 group-hover:text-[#8A867F]"
              style={{ fontSize: "clamp(1.9rem, 5vw, 4.5rem)", transitionDuration: "400ms" }}
            >
              {nextProject.title}
            </h3>
            <span className="font-body text-[10px] tracking-[0.18em] text-[#8A867F] uppercase flex-shrink-0 ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ver →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
