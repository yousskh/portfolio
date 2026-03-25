"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Passionné de Code",
    description: "Toujours en quête de nouvelles technologies et de meilleures pratiques de développement.",
  },
  {
    icon: Lightbulb,
    title: "Créatif",
    description: "J'aime concevoir des solutions innovantes pour résoudre des problèmes complexes.",
  },
  {
    icon: Target,
    title: "Orienté Résultats",
    description: "Focalisé sur la livraison de projets de qualité dans les délais impartis.",
  },
  {
    icon: Users,
    title: "Esprit d'Équipe",
    description: "Collaboration et partage de connaissances sont au coeur de ma démarche.",
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
              étudiant en informatique passionné par le développement logiciel et les technologies web modernes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon parcours académique m&apos;a permis d&apos;acquérir de solides bases en programmation, 
              algorithmique et conception de systèmes. En parallèle, je développe des projets personnels 
              qui me permettent d&apos;explorer de nouvelles technologies et de mettre en pratique mes connaissances.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je suis particulièrement intéressé par le développement full-stack, l&apos;architecture logicielle 
              et les bonnes pratiques de développement. Mon objectif est de créer des applications 
              performantes, maintenables et centrées sur l&apos;utilisateur.
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
