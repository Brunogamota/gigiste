"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectDetail({ project, nextProject }: { project: Project; nextProject: Project }) {
  return (
    <article className="pt-16 md:pt-20">
      {/* Hero */}
      <div className="relative bg-[#EDECEA]" style={{ height: "65vh", minHeight: "400px" }}>
        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Info */}
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-b border-[#E0DDD8]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.2em] text-[#888888] uppercase mb-4">{project.index} — {project.category}</p>
            <h1 className="font-[family-name:var(--font-canela)] font-light text-[#111111] leading-tight tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              {project.title}
            </h1>
            <p className="font-[family-name:var(--font-canela)] italic text-[#888888] mt-2" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}>
              {project.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { l: "Localização", v: project.location },
              { l: "Área", v: project.area },
              { l: "Ano", v: project.year },
            ].map(i => (
              <div key={i.l} className="flex justify-between border-b border-[#E0DDD8] pb-4">
                <span className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.15em] text-[#888888] uppercase">{i.l}</span>
                <span className="font-[family-name:var(--font-suisse)] text-[13px] font-light text-[#111111]">{i.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24 max-w-[900px]">
        <p className="font-[family-name:var(--font-canela)] font-light text-[#111111] leading-relaxed"
          style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}>
          {project.longDescription}
        </p>
      </div>

      {/* Gallery */}
      <div className="space-y-2 px-6 md:px-12 lg:px-16 pb-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
          {project.images.slice(1).map((img, i) => (
            <div key={i} className="relative bg-[#EDECEA]" style={{ aspectRatio: "4/3" }}>
              <img src={img} alt={`${project.title} ${i + 2}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-[#E0DDD8] px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-[family-name:var(--font-suisse)] text-[10px] tracking-[0.2em] text-[#888888] uppercase mb-6">Próximo projeto</p>
          <Link href={`/projetos/${nextProject.id}`} className="group flex items-center justify-between">
            <h3 className="font-[family-name:var(--font-canela)] font-light text-[#111111] leading-none tracking-[-0.02em] group-hover:opacity-50 transition-opacity duration-300"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              {nextProject.title}
            </h3>
            <span className="font-[family-name:var(--font-suisse)] text-[11px] tracking-[0.15em] text-[#888888] uppercase">Ver →</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
