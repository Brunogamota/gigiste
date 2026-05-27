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
    <article style={{ paddingTop: "4rem" }}>
      {/* Hero image */}
      <div
        className="relative w-full bg-[#E8E5E0]"
        style={{ height: "65vh", minHeight: 360 }}
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Info bar */}
      <div
        className="px-6 md:px-12 lg:px-16 py-14 md:py-20"
        style={{ borderBottom: "1px solid #E0DDD8" }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] text-[#888888] uppercase mb-4">
              {project.index} — {project.category}
            </p>
            <h1
              className="font-display font-light text-[#111111] leading-tight tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}
            >
              {project.title}
            </h1>
            <p
              className="font-display italic text-[#888888] mt-3"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.7rem)" }}
            >
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-5 justify-center">
            {[
              { l: "Localização", v: project.location },
              { l: "Área", v: project.area },
              { l: "Ano", v: project.year },
              { l: "Categoria", v: project.category },
            ].map((item) => (
              <div
                key={item.l}
                className="flex justify-between pb-4"
                style={{ borderBottom: "1px solid #E0DDD8" }}
              >
                <span className="font-body text-[10px] tracking-[0.15em] text-[#888888] uppercase">
                  {item.l}
                </span>
                <span className="font-body text-sm font-light text-[#111111]">
                  {item.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Long description */}
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-[760px]">
          <p
            className="font-display font-light text-[#111111] leading-relaxed"
            style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)" }}
          >
            {project.longDescription}
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-6 md:px-12 lg:px-16 pb-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.images.slice(1).map((img, i) => (
            <motion.div
              key={i}
              className="relative bg-[#E8E5E0] overflow-hidden"
              style={{ aspectRatio: "4 / 3" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i % 2 === 1 ? 0.1 : 0 }}
            >
              <img
                src={img}
                alt={`${project.title} — ${i + 2}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="px-6 md:px-12 lg:px-16 pb-16">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] tracking-[0.12em] text-[#888888] uppercase px-4 py-2"
                style={{ border: "1px solid #E0DDD8" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Next project */}
      <div
        className="px-6 md:px-12 lg:px-16 py-14 md:py-20"
        style={{ borderTop: "1px solid #E0DDD8" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body text-[10px] tracking-[0.2em] text-[#888888] uppercase mb-6">
            Próximo projeto
          </p>
          <Link
            href={`/projetos/${nextProject.id}`}
            className="group flex items-center justify-between"
          >
            <h3
              className="font-display font-light text-[#111111] leading-none tracking-[-0.02em] group-hover:opacity-40 transition-opacity duration-300"
              style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}
            >
              {nextProject.title}
            </h3>
            <span className="font-body text-[10px] tracking-[0.15em] text-[#888888] uppercase flex-shrink-0 ml-8">
              Ver →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
