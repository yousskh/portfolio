"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { getAllProjects, type ProjectType } from "@/lib/projects";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { Code2, GraduationCap, Layers } from "lucide-react";

const filters = [
  { id: "all", label: "Tous", icon: Layers },
  { id: "personal", label: "Personnels", icon: Code2 },
  { id: "academic", label: "Académiques", icon: GraduationCap },
] as const;

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("type") as ProjectType | null;
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectType>(
    initialFilter || "all"
  );

  const allProjects = getAllProjects();
  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold md:text-5xl">Mes projets</h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Découvrez l&apos;ensemble de mes projets personnels et académiques.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="gap-2"
            >
              <filter.icon className="size-4" />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Aucun projet trouvé pour ce filtre.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
