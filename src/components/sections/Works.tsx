"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function Works() {
  return (
    <section
      id="projetos"
      className="px-6 md:px-14 lg:px-20 py-24 md:py-36"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between mb-14 pb-6" style={{ borderBottom: "1px solid #DEDAD4" }}>
          <p className="font-body text-[10px] tracking-[0.25em] text-[#8A867F] uppercase">
            Projetos Selecionados
          </p>
          <span className="font-body text-[10px] tracking-[0.15em] text-[#C4BFB9] uppercase hidden sm:block">
            {String(projects.length).padStart(2, "0")} obras
          </span>
        </div>

        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Link
                href={`/projetos/${project.id}`}
                className="group flex items-start md:items-center justify-between gap-4 py-7"
                style={{ borderBottom: "1px solid #DEDAD4" }}
              >
                <div className="flex items-start md:items-center gap-8 md:gap-12 min-w-0 flex-1">
                  <span
                    className="font-body text-[10px] tracking-[0.1em] text-[#C4BFB9] flex-shrink-0 pt-1 md:pt-0"
                    style={{ minWidth: "2rem" }}
                  >
                    {project.index}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3
                      className="font-display font-light text-[#0C0C0B] leading-tight tracking-[-0.015em] transition-colors duration-400 group-hover:text-[#8A867F]"
                      style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.7rem)", transitionDuration: "400ms" }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-body text-[11px] text-[#8A867F] mt-1 md:hidden">
                      {project.location} — {project.year}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-8 flex-shrink-0">
                  <span className="font-body text-[10px] tracking-[0.1em] text-[#8A867F] uppercase w-20 text-right">
                    {project.category}
                  </span>
                  <span className="font-body text-[11px] text-[#8A867F] w-32 text-right">
                    {project.location}
                  </span>
                  <span className="font-body text-[11px] text-[#C4BFB9] w-10 text-right">
                    {project.year}
                  </span>
                  <motion.span
                    className="font-body text-[10px] tracking-[0.2em] text-[#0C0C0B] uppercase"
                    initial={{ opacity: 0, x: -4 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    style={{ minWidth: "3rem" }}
                  >
                    Ver →
                  </motion.span>
                </div>

                {/* Mobile arrow */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="md:hidden flex-shrink-0 opacity-25 group-hover:opacity-70 transition-opacity duration-300 mt-1"
                  aria-hidden
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#0C0C0B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
