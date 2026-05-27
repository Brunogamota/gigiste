"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";

export function Featured() {
  const [main, ...rest] = featuredProjects;

  return (
    <section
      className="px-6 md:px-14 lg:px-20 py-24 md:py-36"
      style={{ borderTop: "1px solid #DEDAD4" }}
    >
      <div className="max-w-[1320px] mx-auto">
        <p className="font-body text-[10px] tracking-[0.25em] text-[#8A8A8A] uppercase mb-12">
          Destaque
        </p>

        {/* Main featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <Link href={`/projetos/${main.id}`} className="group block">
            <div
              className="relative w-full overflow-hidden bg-[#E8E5E0]"
              style={{ aspectRatio: "16/8" }}
            >
              <img
                src={main.images[0]}
                alt={main.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ position: "absolute", inset: 0 }}
              />
            </div>
            <div className="flex items-start justify-between mt-5 gap-6">
              <div>
                <h2
                  className="font-display font-light text-[#0F0F0F] leading-tight tracking-[-0.02em] group-hover:text-[#8A8A8A] transition-colors duration-300"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
                >
                  {main.title}
                </h2>
                <p className="font-body text-[11px] text-[#8A8A8A] mt-1.5">
                  {main.subtitle}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-body text-[11px] tracking-[0.08em] text-[#8A8A8A] uppercase">
                  {main.category}
                </p>
                <p className="font-body text-[11px] text-[#BFBBB5] mt-0.5">
                  {main.location} — {main.year}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projetos/${project.id}`} className="group block">
                <div
                  className="relative w-full overflow-hidden bg-[#E8E5E0]"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ position: "absolute", inset: 0 }}
                  />
                </div>
                <div className="flex items-start justify-between mt-4 gap-4">
                  <div>
                    <h3
                      className="font-display font-light text-[#0F0F0F] leading-tight tracking-[-0.01em] group-hover:text-[#8A8A8A] transition-colors duration-300"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-body text-[11px] text-[#8A8A8A] mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-body text-[11px] text-[#BFBBB5]">
                      {project.year}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
