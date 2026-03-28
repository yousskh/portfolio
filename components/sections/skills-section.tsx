"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Code2, Globe, Terminal, Cpu, Database, Lightbulb } from "lucide-react";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { TextEffect } from "@/components/motion-primitives/text-effect";

const skillCategories = [
  {
    name: "Langages maîtrisés",
    icon: Code2,
    skills: ["Python", "C", "SQL",  "C++", "VB/VBA"],
  },
  {
    name: "Web & Frameworks",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Node.js", "React", "Laravel"],
  },
  {
    name: "Ingénierie",
    icon: Cpu,
    skills: ["Fusion", "KiCad", "Arduino", "ESP32/ATTiny", "Impression 3D / découpe", "Électronique"],
  },
  {
    name: "Outils & DevOps",
    icon: Terminal,
    skills: ["VS Code", "Git", "Docker", "Linux", "Suite Jetbrains", "Shell", "VMWare"],
  },
  {
    name: "Bases de données",
    icon: Database,
    skills: ["MySQL", "SQLite", "PostgreSQL", "Access"],
  },
  {
    name: "Domaines",
    icon: Lightbulb,
    skills: ["Systèmes", "Réseaux", "Administration", "Sécurité", "Déploiement", "Logiciel", "Data"],
  },
];


const CardDecorator = ({ children }: { children: React.ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-50"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
  </div>
);

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function SkillsSection() {
  return (
    <section className="py-16 md:py-32 bg-transparent" id="skills">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <TextEffect
            triggerOnView
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-4xl font-semibold lg:text-5xl"
          >
            Compétences
          </TextEffect>
        </div>
        <AnimatedGroup
          triggerOnView
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.name} className="group bg-black/30 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <category.icon className="size-6" aria-hidden />
                  </CardDecorator>
                  <h3 className="mt-6 font-medium text-xl text-center">{category.name}</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
