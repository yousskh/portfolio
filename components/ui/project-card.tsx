"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type Project } from "@/lib/projects";
import { Github, ExternalLink, FileText, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
    >
      {/* Status badge */}
      {project.status === "in-progress" && (
        <div className="absolute right-3 top-3 z-10">
          <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 dark:text-amber-400">
            En cours
          </Badge>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        
        <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <div className="flex gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
                <span>Code</span>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="size-4" />
                <span>Demo</span>
              </a>
            )}
            {project.links.report && (
              <a
                href={project.links.report}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <FileText className="size-4" />
                <span>Rapport</span>
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <span>Détails</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
