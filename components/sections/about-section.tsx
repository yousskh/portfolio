"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Capacité d'apprentissage",
    description: "Toujours l'envie de découvrir de nouvelles technologies et d'approfondir mes compétences techniques.",
  },
  {
    icon: Lightbulb,
    title: "Créatif",
    description: "J'aime concevoir des solutions innovantes pour résoudre des problèmes complexes.",
  },
  {
    icon: Target,
    title: "Adaptation",
    description: "Je m'adapte rapidement aux nouveaux environnements de travail et aux technologies émergentes.",
  },
  {
    icon: Users,
    title: "Esprit d'équipe",
    description: "Collaboration et communication sont au coeur de mon travail.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">À propos de moi</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bonjour ! Je suis <span className="font-semibold text-foreground">Youssef KHEMIRA</span>, 
              étudiant ingénieur en informatique à l'Université de Technologie de Compoiègne.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon parcours académique m&apos;a permis d&apos;acquérir de solides bases en conception, 
              algorithmique et conception de systèmes. Ces bases sont complétées par des enseignements en sciences humaines, économie, ingénierie soutenable, éthique ainsi que de nombreuses autres thématiques d'actualité, toutes importantes pour les ingénieurs de demain.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alors que mes enseignements m'ont appris la rigueur théorique et les fondations des sciences informatiques, je développe en parallèle des projets personnels 
              qui me permettent d&apos;explorer de nouvelles technologies et de mettre en pratique mes connaissances.
 
            </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Je suis particulièrement intéressé par l'administration et la gestion de systèmes, les réseaux informatiques, ainsi que tout l'aspect architectural et la sécurité.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group rounded-xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-5" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
