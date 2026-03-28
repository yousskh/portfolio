"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getFeaturedProject } from "@/lib/projects";
import { Github, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FeaturedProject() {
  const project = getFeaturedProject();

  if (!project) return null;

  return (
    <section id="projects" className="bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Mes projets</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="overflow-hidden rounded-2xl border bg-card">
            <div className="grid lg:grid-cols-2">
              {/* Visual */}
              <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 lg:p-12">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-2xl" />
                  <div className="relative flex size-32 items-center justify-center rounded-2xl border bg-background shadow-xl lg:size-48">
                    <span className="text-4xl font-bold text-primary lg:text-6xl">WM</span>
                  </div>
                </div>
                {project.status === "in-progress" && (
                  <div className="absolute right-4 top-4">
                    <Badge className="bg-amber-500 text-white">Mis en avant</Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="mt-4 text-2xl font-bold lg:text-3xl">{project.title}</h3>
                
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>

                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase text-muted-foreground">
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.links.github && (
                    <Button asChild variant="outline">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 size-4" />
                        Voir le code
                      </a>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button asChild>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 size-4" />
                        Demo live
                      </a>
                    </Button>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    En savoir plus
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
