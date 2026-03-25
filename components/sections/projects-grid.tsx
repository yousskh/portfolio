"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getPersonalProjects, getAcademicProjects } from "@/lib/projects";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, GraduationCap } from "lucide-react";

export default function ProjectsGrid() {
  const personalProjects = getPersonalProjects();
  const academicProjects = getAcademicProjects();

  return (
    <>
      {/* Personal Projects */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code2 className="size-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Projets Personnels</h2>
                <p className="text-sm text-muted-foreground">
                  Mes créations et expérimentations
                </p>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link href="/projects?type=personal">
                Voir tout
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {personalProjects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Academic Projects */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Projets Académiques</h2>
                <p className="text-sm text-muted-foreground">
                  Travaux de cours et recherche
                </p>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link href="/projects?type=academic">
                Voir tout
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {academicProjects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
