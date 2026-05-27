"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const { ref: headerRef, isVisible: headerVisible } = useReveal({ threshold: 0.1 });

  const filters = ["Todos", "Residencial", "Institucional", "Comercial"];

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projetos" className="relative bg-[#0A0A0A] px-6 sm:px-8 md:px-14 py-20 sm:py-32 md:py-48">
      {/* Header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-body text-[9px] tracking-[0.25em] text-[#3A3A3A] uppercase">
              Portfólio
            </span>
            <div className="w-8 h-[1px] bg-[#3A3A3A]" />
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              animate={headerVisible ? { y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="font-display font-light text-[#F2EFE8] tracking-[-0.04em] leading-[0.95]"
              style={{ fontSize: "clamp(2.8rem, 8vw, 7.5rem)" }}
            >
              Projetos
            </motion.h2>
          </div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headerVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-6"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-body text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                activeFilter === filter
                  ? "text-[#C8C8C8]"
                  : "text-[#3A3A3A] hover:text-[#6B6B6B]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid - Masonry style */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isHovered={hoveredId === project.id}
              onHover={(id) => setHoveredId(id)}
              isAnyHovered={hoveredId !== null}
              variant={i % 5 === 0 ? "large" : i % 3 === 1 ? "medium" : "small"}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <a href="#contato" className="btn-premium">
          <span>Iniciar um projeto</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  isAnyHovered: boolean;
  variant: "large" | "medium" | "small";
}

function ProjectCard({ project, index, isHovered, onHover, isAnyHovered, variant }: ProjectCardProps) {
  const heightMap = {
    large: "h-[60vw] sm:h-[70vh]",
    medium: "h-[55vw] sm:h-[50vh]",
    small: "h-[55vw] sm:h-[40vh]",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: isAnyHovered && !isHovered ? 0.4 : 1,
        y: 0,
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
      className={`relative group overflow-hidden ${
        variant === "large" ? "md:col-span-2" : ""
      }`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Link href={`/projetos/${project.id}`}>
        <div className={`relative overflow-hidden ${heightMap[variant]} bg-[#111111]`}>
          {/* Image */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-[#0A0A0A]"
            animate={{ opacity: isHovered ? 0.3 : 0.4 }}
            transition={{ duration: 0.6 }}
          />

          {/* Hover reveal content */}
          <motion.div
            className="absolute inset-0 p-8 flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-between items-start">
              <span className="font-body text-[9px] tracking-[0.25em] text-[#6B6B6B] uppercase bg-[rgba(10,10,10,0.6)] px-3 py-2">
                {project.category}
              </span>
              <span className="font-body text-[9px] tracking-[0.15em] text-[#6B6B6B]">
                {project.area}
              </span>
            </div>

            <div>
              <div className="w-8 h-[1px] bg-[#6B6B6B] mb-4" />
              <p className="font-body text-[12px] font-light text-[#9A9A9A] leading-relaxed max-w-[280px]">
                {project.description}
              </p>
            </div>
          </motion.div>

          {/* Bottom info - always visible */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[rgba(10,10,10,0.9)] to-transparent">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-body text-[9px] tracking-[0.2em] text-[#6B6B6B] uppercase mb-2">
                  {project.index} — {project.location}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-light text-[#F2EFE8] tracking-[-0.02em] leading-tight">
                  {project.title}
                </h3>
                <p className="font-body text-[12px] font-light text-[#6B6B6B] mt-1">
                  {project.subtitle}
                </p>
              </div>
              <motion.div
                animate={{
                  x: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="flex-shrink-0"
              >
                <div className="w-10 h-10 border border-[rgba(200,200,200,0.3)] rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="#C8C8C8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Year tag */}
          <div className="absolute top-6 right-6">
            <span className="font-body text-[10px] tracking-[0.1em] text-[#3A3A3A]">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
