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
    <article>
      {/* Hero image — full bleed, Norm-style */}
      <motion.div
        className="relative w-full bg-[#D4CFC9] overflow-hidden"
        style={{ height: "92svh", minHeight: 480 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      {/* Project header */}
      <motion.div
        className="px-6 md:px-16 lg:px-20 pt-10 pb-14 md:pb-20"
        style={{ borderBottom: "1px solid var(--border)" }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-20">
          <div>
            <p className="font-body text-[10px] tracking-[0.22em] uppercase text-[var(--muted)] mb-5">
              {project.index} &nbsp;·&nbsp; {project.category}
            </p>
            <h1
              className="font-display font-light text-[var(--fg)] leading-[1.0] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)" }}
            >
              {project.title}
            </h1>
            <p
              className="font-display italic text-[var(--muted)] mt-3"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.4rem)" }}
            >
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-0 justify-end">
            {[
              { l: "Localização", v: project.location },
              { l: "Área", v: project.area },
              { l: "Ano", v: project.year },
            ].map((item) => (
              <div
                key={item.l}
                className="flex justify-between py-3.5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span className="font-body text-[10px] tracking-[0.14em] uppercase text-[var(--muted)]">
                  {item.l}
                </span>
                <span className="font-body text-[13px] font-light text-[var(--fg)]">
                  {item.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <div className="px-6 md:px-16 lg:px-20 py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto">
          <motion.p
            className="font-display font-light text-[var(--fg)] leading-[1.5] tracking-[-0.01em]"
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.5rem)",
              maxWidth: "56ch",
            }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.longDescription}
          </motion.p>
        </div>
      </div>

      {/* Gallery — alternating full + paired */}
      <div className="px-6 md:px-16 lg:px-20 pb-20">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-3">
          {project.images.slice(1).map((img, i) => (
            <motion.div
              key={i}
              className="relative bg-[#D4CFC9] overflow-hidden w-full"
              style={{ aspectRatio: i % 2 === 0 ? "16/9" : "4/3" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src={img}
                alt={`${project.title} — ${i + 2}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="px-6 md:px-16 lg:px-20 pb-16">
          <div className="max-w-[1280px] mx-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] tracking-[0.12em] uppercase text-[var(--muted)] px-3.5 py-2"
                style={{ border: "1px solid var(--border)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Next project */}
      <div
        className="px-6 md:px-16 lg:px-20 py-14 md:py-20"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-[var(--muted)] mb-6">
            Próximo projeto
          </p>
          <Link
            href={`/projetos/${nextProject.id}`}
            className="group flex items-center justify-between gap-6"
          >
            <h2
              className="font-display font-light text-[var(--fg)] leading-none tracking-[-0.025em] transition-colors duration-500 group-hover:text-[var(--muted)]"
              style={{ fontSize: "clamp(1.8rem, 5.5vw, 4.5rem)" }}
            >
              {nextProject.title}
            </h2>
            <span className="font-body text-[11px] tracking-[0.14em] uppercase text-[var(--muted)] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ver →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
