"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function Works() {
  return (
    <section
      id="projetos"
      className="px-6 md:px-14 lg:px-20 py-24 md:py-36"
      style={{ borderTop: "1px solid #DEDAD4" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div
          className="flex items-end justify-between mb-16"
        >
          <p className="font-body text-[10px] tracking-[0.25em] text-[#8A8A8A] uppercase">
            Projetos
          </p>
          <span className="font-body text-[10px] tracking-[0.15em] text-[#BFBBB5] uppercase">
            {projects.length} obras
          </span>
        </div>

        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/projetos/${project.id}`}
                className="group flex items-start md:items-center justify-between gap-6 py-6 md:py-7"
                style={{ borderBottom: "1px solid #DEDAD4" }}
              >
                <div className="flex items-start md:items-center gap-6 md:gap-10 min-w-0">
                  <span className="font-body text-[10px] tracking-[0.1em] text-[#BFBBB5] flex-shrink-0 pt-0.5 md:pt-0">
                    {project.index}
                  </span>

                  <div className="min-w-0">
                    <h3
                      className="font-display font-light text-[#0F0F0F] leading-tight tracking-[-0.01em] group-hover:text-[#8A8A8A] transition-colors duration-300"
                      style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-body text-[11px] text-[#8A8A8A] mt-1 md:hidden">
                      {project.location} — {project.year}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-10 flex-shrink-0">
                  <span className="font-body text-[11px] tracking-[0.08em] text-[#8A8A8A] uppercase w-24 text-right">
                    {project.category}
                  </span>
                  <span className="font-body text-[11px] text-[#8A8A8A] w-28 text-right">
                    {project.location}
                  </span>
                  <span className="font-body text-[11px] text-[#BFBBB5] w-10 text-right">
                    {project.year}
                  </span>
                  <span
                    className="font-body text-[10px] tracking-[0.18em] text-[#0F0F0F] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
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
