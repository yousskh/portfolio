"use client";

import { motion } from "framer-motion";
import { getTimelineEvents, type TimelineEvent } from "@/lib/timeline";
import { GraduationCap, Briefcase, Rocket, Award } from "lucide-react";

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  project: Rocket,
  achievement: Award,
};

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const Icon = iconMap[event.type];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex gap-6 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[19px] top-10 h-[calc(100%-40px)] w-0.5 bg-border last:hidden" />
      
      {/* Icon */}
      <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-primary">
        <Icon className="size-5" />
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            {event.date}
          </span>
          {event.subtitle && (
            <span className="text-sm text-muted-foreground">{event.subtitle}</span>
          )}
        </div>
        <h3 className="mt-3 text-lg font-semibold">{event.title}</h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">{event.description}</p>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  const events = getTimelineEvents();

  return (
    <section id="timeline" className="bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Mon parcours</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Voici les étapes clés de mon parcours académique et professionnel, qui ont façonné mon apprentissage.
          </p>
        </motion.div>

        <div className="mt-16">
          {events.map((event, index) => (
            <TimelineItem key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
