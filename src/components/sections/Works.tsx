"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

// Norm-style editorial layout pattern for 6 projects
// Row 1: full-width landscape
// Row 2: 7/12 left + 5/12 right (unequal columns)
// Row 3: offset right — starts at col 4 of 12
// Row 4: two equal portrait columns
const layouts: { gridColumn: string; aspect: string }[] = [
  { gridColumn: "1 / 13",  aspect: "21/9"  },  // Casa Caetetuba — cinematic
  { gridColumn: "1 / 9",   aspect: "4/3"   },  // Instituto Horizonte — landscape
  { gridColumn: "9 / 13",  aspect: "3/4"   },  // Vila Minerva — portrait
  { gridColumn: "4 / 13",  aspect: "16/9"  },  // Sede VELA — offset right
  { gridColumn: "1 / 7",   aspect: "3/4"   },  // Capella Serrana — portrait
  { gridColumn: "7 / 13",  aspect: "3/4"   },  // Casa do Pátio — portrait
];

function ProjectCaption({
  title,
  category,
  location,
  year,
}: {
  title: string;
  category: string;
  location: string;
  year: string;
}) {
  return (
    <div className="mt-4">
      <p
        className="font-display font-light text-[var(--fg)] leading-tight tracking-[-0.01em]"
        style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.05rem)" }}
      >
        {title}
      </p>
      <p className="font-body text-[10px] tracking-[0.12em] text-[var(--muted)] uppercase mt-1">
        {category} &nbsp;·&nbsp; {location} &nbsp;·&nbsp; {year}
      </p>
    </div>
  );
}

export function Works() {
  return (
    <section
      id="projetos"
      className="px-6 md:px-16 lg:px-20 pt-20 md:pt-28 pb-28 md:pb-40"
    >
      {/* Section header */}
      <motion.div
        className="flex items-center justify-between mb-14 md:mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">
          Trabalho Selecionado
        </span>
        <span className="font-body text-[10px] tracking-[0.14em] text-[var(--border)]">
          {String(projects.length).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Editorial grid — 12-column base, items placed via gridColumn */}
      <div
        className="hidden md:grid"
        style={{ gridTemplateColumns: "repeat(12, 1fr)", gap: "6px", rowGap: 0 }}
      >
        {projects.map((project, i) => {
          const layout = layouts[i] ?? { gridColumn: "1 / 13", aspect: "4/3" };
          return (
            <motion.div
              key={project.id}
              style={{ gridColumn: layout.gridColumn, marginBottom: "clamp(3rem, 5vw, 5.5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projetos/${project.id}`} className="group block">
                <div
                  className="relative w-full overflow-hidden bg-[#D4CFC9]"
                  style={{ aspectRatio: layout.aspect }}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[750ms] ease-out group-hover:scale-[1.03]"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
                <ProjectCaption
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  year={project.year}
                />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: single column, full width */}
      <div className="md:hidden flex flex-col gap-14">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/projetos/${project.id}`} className="group block">
              <div
                className="relative w-full overflow-hidden bg-[#D4CFC9]"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[750ms] ease-out group-hover:scale-[1.03]"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              <ProjectCaption
                title={project.title}
                category={project.category}
                location={project.location}
                year={project.year}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
