"use client";

import { motion } from "framer-motion";
import { getAllSkills, type SkillCategory, type Skill } from "@/lib/skills";

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
        />
      </div>
    </motion.div>
  );
}

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-xl border bg-card p-6"
    >
      <h3 className="mb-6 text-lg font-semibold">{category.name}</h3>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const categories = getAllSkills();

  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Compétences</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Les technologies et outils que je maîtrise, acquis au fil de mes études 
            et de mes projets personnels.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
