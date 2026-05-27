"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";

export function Featured() {
  const [first, second, third] = featuredProjects;

  return (
    <section
      className="px-6 md:px-14 lg:px-20 pb-28 md:pb-40"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between mb-10 pb-5" style={{ borderBottom: "1px solid #DEDAD4" }}>
          <p className="font-body text-[10px] tracking-[0.25em] text-[#8A867F] uppercase">
            Em Destaque
          </p>
        </div>

        {/* Asymmetric editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 mb-4">
          {/* Large featured */}
          {first && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projetos/${first.id}`} className="group block">
                <div
                  className="relative w-full overflow-hidden bg-[#E3DFD9]"
                  style={{ aspectRatio: "3/2" }}
                >
                  <img
                    src={first.images[0]}
                    alt={first.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{ background: "rgba(15,12,10,0.12)" }}
                  />
                </div>
                <div className="flex items-start justify-between mt-5 gap-4">
                  <div>
                    <h2
                      className="font-display font-light text-[#0C0C0B] leading-tight tracking-[-0.02em] transition-colors duration-400 group-hover:text-[#8A867F]"
                      style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", transitionDuration: "400ms" }}
                    >
                      {first.title}
                    </h2>
                    <p className="font-body text-[11px] text-[#8A867F] mt-1.5 leading-relaxed">
                      {first.subtitle}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-body text-[10px] tracking-[0.1em] text-[#8A867F] uppercase">
                      {first.category}
                    </p>
                    <p className="font-body text-[11px] text-[#C4BFB9] mt-1">
                      {first.year}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Right column — two stacked */}
          <div className="flex flex-col gap-4">
            {[second, third].filter(Boolean).map((project, i) => (
              <motion.div
                key={project!.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.12 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/projetos/${project!.id}`} className="group block">
                  <div
                    className="relative w-full overflow-hidden bg-[#E3DFD9]"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img
                      src={project!.images[0]}
                      alt={project!.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      style={{ background: "rgba(15,12,10,0.12)" }}
                    />
                  </div>
                  <div className="flex items-start justify-between mt-4 gap-3">
                    <div>
                      <h3
                        className="font-display font-light text-[#0C0C0B] leading-tight tracking-[-0.015em] transition-colors duration-400 group-hover:text-[#8A867F]"
                        style={{ fontSize: "clamp(1.1rem, 1.9vw, 1.5rem)", transitionDuration: "400ms" }}
                      >
                        {project!.title}
                      </h3>
                      <p className="font-body text-[11px] text-[#8A867F] mt-1">
                        {project!.subtitle}
                      </p>
                    </div>
                    <span className="font-body text-[11px] text-[#C4BFB9] flex-shrink-0">
                      {project!.year}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
