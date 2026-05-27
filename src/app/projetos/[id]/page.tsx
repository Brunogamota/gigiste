import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} — FORMA`,
    description: project.description,
    openGraph: {
      title: `${project.title} — FORMA Arquitetura`,
      description: project.description,
      images: [{ url: project.images[0], width: 1200, height: 800 }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-[#0A0A0A]">
      <Navigation />
      <ProjectDetail project={project} nextProject={nextProject} />
      <Footer />
    </main>
  );
}
