import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import DecryptedText from "@/components/DecryptedText"
import { transitionVariants } from "@/lib/utils"
import LanyardWithControls from "@/components/lanyard-with-controls"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Code2, Database, Globe, GraduationCap, Briefcase, Rocket, Award, Github, Linkedin, Mail, Send, ArrowRight, ExternalLink, FileText, Cpu, Terminal, Layers } from 'lucide-react'
import Dither from "@/components/Dither"

// Skills data
const skillCategories = [
  {
    name: "Langages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL"]
  },
  {
    name: "Web & Frameworks",
    icon: Globe,
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"]
  },
  {
    name: "Outils & DevOps",
    icon: Terminal,
    skills: ["Git", "Docker", "Linux", "VS Code", "PostgreSQL"]
  },
  {
    name: "Domaines",
    icon: Cpu,
    skills: ["Algorithmique", "Base de donnees", "IA/ML", "Reseaux"]
  }
]

// Timeline data
const timelineEvents = [
  {
    year: "2024",
    title: "Projet WebMDS",
    description: "Developpement de mon projet personnel phare",
    icon: Rocket,
    type: "project"
  },
  {
    year: "2023",
    title: "Licence Informatique",
    description: "Poursuite des etudes en informatique",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "2022",
    title: "Premiers Projets",
    description: "Debut des projets personnels et academiques",
    icon: Award,
    type: "milestone"
  },
  {
    year: "2021",
    title: "Debut des Etudes",
    description: "Entree en formation informatique",
    icon: Briefcase,
    type: "education"
  }
]

// Featured project
const featuredProject = {
  name: "WebMDS",
  description: "Un projet innovant qui revolutionne la facon dont nous interagissons avec les donnees. WebMDS est une plateforme complete offrant des fonctionnalites avancees pour la gestion et la visualisation de donnees.",
  technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  github: "https://github.com/youssefkhemira/webmds",
  demo: "https://webmds.vercel.app"
}

// Personal projects
const personalProjects = [
  {
    name: "Portfolio v0",
    description: "Ce portfolio interactif construit avec Next.js et Three.js",
    technologies: ["Next.js", "Three.js", "Tailwind"],
    github: "#",
    slug: "portfolio-v0"
  },
  {
    name: "CLI Tools",
    description: "Collection d'outils en ligne de commande",
    technologies: ["Python", "Click", "Rich"],
    github: "#",
    slug: "cli-tools"
  }
]

// Academic projects
const academicProjects = [
  {
    name: "Projet Base de Donnees",
    description: "Conception et implementation d'une base de donnees relationnelle",
    technologies: ["SQL", "PostgreSQL", "Python"],
    report: "#",
    slug: "projet-bdd"
  },
  {
    name: "Algorithmes Avances",
    description: "Implementation d'algorithmes de graphes et d'optimisation",
    technologies: ["Python", "C++", "LaTeX"],
    report: "#",
    slug: "algo-avances"
  },
  {
    name: "Projet Reseaux",
    description: "Configuration et analyse de protocoles reseau",
    technologies: ["Wireshark", "Python", "TCP/IP"],
    report: "#",
    slug: "projet-reseaux"
  }
]

const CardDecorator = ({ children }: { children: React.ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-50"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
  </div>
)

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <Dither
          waveSpeed={0.03}
          waveFrequency={2}
          waveAmplitude={0.3}
          waveColor={[0.1, 0.1, 0.15]}
          colorNum={4}
          pixelSize={3}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.8}
        />
      </div>

      {/* Hero Section */}
      <section className='lg:h-screen' id="home">
        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44 lg:grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2">
          <div className="relative mx-auto flex max-w-xl flex-col px-6 lg:block">
            <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:text-left">
              <div className='mt-8 lg:mt-16'>
                <DecryptedText
                  text="Etudiant en Informatique - Portfolio"
                  animateOn="view"
                  revealDirection="start"
                  sequential
                  useOriginalCharsOnly={false}
                  speed={70}
                  className='font-mono text-muted-foreground bg-black/50 backdrop-blur-sm rounded-md uppercase px-2 py-1'
                />
              </div>
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-6 max-w-2xl text-balance text-6xl font-semibold md:text-7xl xl:text-8xl">
                Youssef
              </TextEffect>
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="max-w-2xl text-balance text-6xl font-semibold md:text-7xl xl:text-8xl text-primary">
                KHEMIRA
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground bg-black/50 backdrop-blur-sm p-2 rounded-md">
                Passionne par le developpement logiciel et les nouvelles technologies. Je cree des solutions innovantes et partage mes projets.
              </TextEffect>
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="px-5 text-base">
                  <Link href="#projects">
                    <span className="text-nowrap">Voir mes projets</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="px-5 text-base bg-black/30 backdrop-blur-sm hover:bg-black/40">
                  <Link href="#contact">
                    <span className="text-nowrap">Me contacter</span>
                  </Link>
                </Button>
              </AnimatedGroup>
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 1,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
              >
                <a
                  href="https://github.com/youssefkhemira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-md"
                >
                  <Github className="size-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/youssefkhemira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-md"
                >
                  <Linkedin className="size-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </AnimatedGroup>
            </div>
          </div>
          <LanyardWithControls
            position={[0, 0, 20]}
            containerClassName='lg:absolute lg:top-0 lg:right-0 lg:w-1/2 relative w-full h-screen bg-radial lg:from-transparent lg:to-transparent from-muted to-background select-none'
            defaultName="Youssef KHEMIRA" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-32 bg-transparent" id="about">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <TextEffect
              triggerOnView
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-balance text-4xl font-semibold lg:text-5xl">
              A propos de moi
            </TextEffect>
          </div>
          <AnimatedGroup
            triggerOnView
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.3,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12"
          >
            <Card className="bg-black/30 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Etudiant passionne en informatique, je me specialise dans le developpement web et les technologies modernes. 
                  Mon parcours academique combine avec mes projets personnels m&apos;a permis d&apos;acquerir des competences solides 
                  en programmation, conception de bases de donnees et developpement d&apos;applications.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Je suis constamment a la recherche de nouveaux defis et d&apos;opportunites pour apprendre et evoluer dans ce domaine en perpetuelle evolution.
                </p>
              </CardContent>
            </Card>
          </AnimatedGroup>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-32 bg-transparent" id="skills">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <TextEffect
              triggerOnView
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-balance text-4xl font-semibold lg:text-5xl">
              Competences
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

      {/* Timeline Section */}
      <section className="py-16 md:py-32 bg-transparent" id="timeline">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <TextEffect
              triggerOnView
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-balance text-4xl font-semibold lg:text-5xl">
              Mon Parcours
            </TextEffect>
          </div>
          <AnimatedGroup
            triggerOnView
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.3,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20" />
              
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <event.icon className="size-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 bg-black/30 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <span className="text-sm font-mono text-primary">{event.year}</span>
                      <h3 className="mt-2 text-xl font-semibold">{event.title}</h3>
                      <p className="mt-2 text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 md:py-32 bg-transparent" id="projects">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <TextEffect
              triggerOnView
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-balance text-4xl font-semibold lg:text-5xl">
              Projet Phare
            </TextEffect>
          </div>
          <AnimatedGroup
            triggerOnView
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.3,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12"
          >
            <Card className="overflow-hidden bg-black/40 backdrop-blur-sm border-primary/30 border-2">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="size-8 text-primary" />
                  <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full border border-primary/30">
                    PROJET PRINCIPAL
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{featuredProject.name}</h3>
                <p className="text-lg text-muted-foreground mb-6">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="size-5 mr-2" />
                      Voir le code
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-black/30">
                    <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-5 mr-2" />
                      Demo live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedGroup>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <TextEffect
              triggerOnView
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-balance text-3xl font-semibold lg:text-4xl">
              Projets Personnels
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
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map((project) => (
                <Card key={project.slug} className="group bg-black/30 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        <Github className="size-5" />
                      </a>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded"
                        >
                          {tech}
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

      {/* Academic Projects Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <TextEffect
              triggerOnView
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-balance text-3xl font-semibold lg:text-4xl">
              Projets Academiques
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
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {academicProjects.map((project) => (
                <Card key={project.slug} className="group bg-black/30 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <a href={project.report} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        <FileText className="size-5" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded"
                        >
                          {tech}
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

      {/* Contact Section */}
      <section className="py-16 md:py-32 bg-transparent" id="contact">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <TextEffect
              triggerOnView
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-balance text-4xl font-semibold lg:text-5xl">
              Me Contacter
            </TextEffect>
            <TextEffect
              triggerOnView
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.2}
              as="p"
              className="mt-4 text-lg text-muted-foreground">
              Interessse par mon profil? N&apos;hesitez pas a me contacter.
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
            className="mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <a href="mailto:youssef.khemira@email.com">
                  <Mail className="size-5" />
                  Email
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-black/30">
                <a href="https://github.com/youssefkhemira" target="_blank" rel="noopener noreferrer">
                  <Github className="size-5" />
                  GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-black/30">
                <a href="https://linkedin.com/in/youssefkhemira" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="size-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Spacer for footer */}
      <div className="h-16" />
    </main>
  )
}
