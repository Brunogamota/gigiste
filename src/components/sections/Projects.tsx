"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projetos"
      className="px-6 md:px-12 lg:px-16 py-24 md:py-36"
      style={{ borderTop: "1px solid #E0DDD8" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-3">
              Portfólio
            </p>
            <h2
              className="font-display font-light text-[#111111] leading-none tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            >
              Projetos selecionados
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i % 2 === 1 ? 0.1 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/projetos/${project.id}`} className="group block">
                {/* Image */}
                <div
                  className="relative overflow-hidden bg-[#E8E5E0] mb-5"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>

                {/* Caption */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-body text-[10px] tracking-[0.15em] text-[#888888] uppercase mb-2">
                      {project.index} — {project.category}
                    </p>
                    <h3 className="font-display text-2xl font-light text-[#111111] leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-body text-xs text-[#888888] mt-1">
                      {project.location}, {project.year}
                    </p>
                  </div>
                  <span className="font-body text-[10px] tracking-[0.1em] text-[#888888] uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
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
