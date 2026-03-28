"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import PortfolioLanyard from "@/components/portfolio-lanyard";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import Dither from "@/components/Dither";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Fond animé uniquement sur la section Hero */}
      <div className="absolute inset-0 -z-10">
        <Dither
          waveSpeed={0.03}
          waveFrequency={2}
          waveAmplitude={0.3}
          waveColor={[0.1, 0.1, 0.3, 0.05]}
          colorNum={4}
          pixelSize={3}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.8}
        />
      </div>
      <div className="pb-24 pt-12 md:pb-32 lg:pb-20 lg:pt-24 lg:grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2">
        <div className="relative mx-auto flex max-w-xl flex-col px-6 lg:block">
          <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:text-left">
            <div className="mt-8 lg:mt-16">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-mono text-sm text-primary">
                Étudiant ingénieur UTC en Génie Informatique
              </span>
            </div>
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-6 max-w-2xl text-balance text-5xl font-bold md:text-6xl xl:text-7xl"
            >
              Youssef
            </TextEffect>
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="max-w-2xl text-balance text-5xl font-bold md:text-6xl xl:text-7xl text-primary"
            >
              KHEMIRA
            </TextEffect>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground"
            >
              Futur ingénieur en informatique, orienté vers l'administration système, les réseaux et la sécurité informatique.
              Constamment à la recherche de nouveaux défis pour apprendre et affiner mes compétences.
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
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button asChild size="lg" className="px-6 text-base">
                <Link href="#projects">
                  <span className="text-nowrap">Voir mes projets</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-6 text-base"
              >
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
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/youssefkhemira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </AnimatedGroup>
          </div>
        </div>
        <PortfolioLanyard
          position={[0, 0, 20]}
          containerClassName="lg:absolute lg:top-0 lg:right-0 lg:w-1/2 relative w-full h-[70vh] lg:h-screen select-none"
          userName="Youssef KHEMIRA"
          title="Étudiant ingénieur UTC en Génie Informatique"
          variant="dark"
        />
      </div>
      <div className="flex justify-center pb-8 lg:pb-16">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-sm">Découvrir</span>
          <ArrowDown className="size-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
