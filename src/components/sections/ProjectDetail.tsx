"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  nextProject: Project;
}

export function ProjectDetail({ project, nextProject }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <article>
      {/* Hero */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 scale-110"
          style={{ y: imageY }}
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.5)]" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.9) 100%)",
          }}
        />

        <motion.div
          style={{ y: titleY, opacity }}
          className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-20"
        >
          <div className="overflow-hidden mb-3">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 3.2, ease: [0.19, 1, 0.22, 1] }}
              className="font-body text-[10px] tracking-[0.25em] text-[#6B6B6B] uppercase"
            >
              {project.index} — {project.category} — {project.location} — {project.year}
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 3.35, ease: [0.19, 1, 0.22, 1] }}
              className="font-display font-light text-[#F2EFE8] tracking-[-0.04em] leading-[0.92]"
              style={{ fontSize: "clamp(3rem, 9vw, 10rem)" }}
            >
              {project.title}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 3.5, ease: [0.19, 1, 0.22, 1] }}
              className="font-display font-light italic text-[#9A9A9A] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
            >
              {project.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Project info */}
      <div className="px-8 md:px-14 py-20 md:py-32">
        {/* Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-12 border-b border-[rgba(42,42,42,0.4)]">
          {[
            { label: "Localização", value: project.location },
            { label: "Área", value: project.area },
            { label: "Ano", value: project.year },
            { label: "Categoria", value: project.category },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-body text-[9px] tracking-[0.2em] text-[#3A3A3A] uppercase mb-2">
                {item.label}
              </p>
              <p className="font-body text-[14px] font-light text-[#C8C8C8]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
          <div>
            <p
              className="font-display font-light text-[#C8C8C8] leading-[1.3] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              {project.description}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <p className="font-body text-[14px] font-light text-[#9A9A9A] leading-relaxed">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-[10px] tracking-[0.15em] text-[#6B6B6B] uppercase border border-[rgba(42,42,42,0.6)] px-3 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="space-y-1 mb-1">
        {project.images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className={`relative overflow-hidden ${
              i === 0
                ? "h-[70vh] md:h-screen"
                : i === 1
                ? "h-[50vh] md:h-[70vh]"
                : "h-[45vh] md:h-[60vh]"
            }`}
          >
            <motion.img
              src={img}
              alt={`${project.title} — ${i + 1}`}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            />
            <div className="absolute bottom-6 right-6">
              <span className="font-body text-[10px] tracking-[0.15em] text-[rgba(200,200,200,0.4)]">
                {String(i + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Next project */}
      <Link href={`/projetos/${nextProject.id}`} className="block group">
        <div className="relative h-[50vh] overflow-hidden">
          <motion.img
            src={nextProject.images[0]}
            alt={nextProject.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          />
          <div className="absolute inset-0 bg-[rgba(10,10,10,0.6)] group-hover:bg-[rgba(10,10,10,0.4)] transition-colors duration-700" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-body text-[9px] tracking-[0.25em] text-[#6B6B6B] uppercase mb-6">
              Próximo projeto
            </p>
            <h3
              className="font-display font-light text-[#F2EFE8] tracking-[-0.04em] text-center transition-transform duration-700 group-hover:scale-105"
              style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)" }}
            >
              {nextProject.title}
            </h3>
            <div className="mt-6 w-8 h-8 border border-[rgba(200,200,200,0.3)] rounded-full flex items-center justify-center group-hover:border-[rgba(200,200,200,0.6)] transition-colors duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v8M2 6l4 4 4-4" stroke="#C8C8C8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
