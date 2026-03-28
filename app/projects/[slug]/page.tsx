import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  FileText,
  Calendar,
  Tag,
} from "lucide-react";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} | Youssef KHEMIRA`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back button */}
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Retour aux projets
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge
              variant={project.type === "personal" ? "default" : "secondary"}
            >
              {project.type === "personal" ? "Personnel" : "Académique"}
            </Badge>
            {project.status === "in-progress" && (
              <Badge className="bg-amber-500 text-white">En cours</Badge>
            )}
            {project.featured && (
              <Badge className="bg-primary text-primary-foreground">
                Mis en avant
              </Badge>
            )}
          </div>

          <h1 className="text-4xl font-bold md:text-5xl">{project.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {project.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="size-4" />
              {project.tags.join(", ")}
            </span>
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="mb-8 flex h-64 items-center justify-center rounded-2xl border bg-gradient-to-br from-primary/20 via-primary/10 to-transparent md:h-80">
          <div className="flex size-24 items-center justify-center rounded-2xl border bg-background shadow-xl md:size-32">
            <span className="text-3xl font-bold text-primary md:text-4xl">
              {project.title.substring(0, 2).toUpperCase()}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-muted-foreground/20 max-w-[48px]" />
            <h2>Description</h2>
          </div>
          <p className="text-lg leading-relaxed mt-4 mb-8">{project.fullDescription}</p>

          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-muted-foreground/20 max-w-[48px]" />
            <h2>Étiquettes associées</h2>
          </div>
          <div className="not-prose flex flex-wrap gap-2 mt-4 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

            {project.coauthors && (
            <>
              <div className="flex items-center gap-3">
                <div className="flex-1 border-t border-muted-foreground/20 max-w-[48px]" />
                <h2>Co-auteurs</h2>
              </div>
              <div className="not-prose flex flex-wrap gap-2 mt-4 mb-8">
                {project.coauthors.split(/,| et /).map((author) => (
                  <Badge key={author.trim()} className="bg-primary/30 text-primary border-primary/40 font-medium px-4 py-1.5 text-sm">
                    {author.trim()}
                  </Badge>
                ))}
              </div>
            </>
            )}

            {project.resp && (
            <>
              <div className="flex items-center gap-3">
                <div className="flex-1 border-t border-muted-foreground/20 max-w-[48px]" />
                <h2>Responsable / suiveur</h2>
              </div>
              <div className="not-prose flex flex-wrap gap-2 mt-4 mb-8">
                {project.resp.split(/,| et /).map((resp) => (
                  <Badge key={resp.trim()} className="bg-secondary/40 text-secondary-foreground border-secondary/50 font-medium px-4 py-1.5 text-sm">
                    {resp.trim()}
                  </Badge>
                ))}
              </div>
            </>
            )}

        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-wrap gap-4 border-t pt-8">
          {project.links.github && (
            <Button asChild variant="outline" size="lg">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 size-5" />
                Voir le code source
              </a>
            </Button>
          )}
          {project.links.live && (
            <Button asChild size="lg">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 size-5" />
                Voir la démo
              </a>
            </Button>
          )}
          {project.links.report && (
            <Button asChild variant="outline" size="lg">
              <a
                href={`/resources/${project.links.report}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 size-5" />
                Lire le rapport
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
