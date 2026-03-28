import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { title: "Accueil", href: "/" },
  { title: "Projets", href: "/projects" },
  { title: "Compétences", href: "/#skills" },
  { title: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/yousskh",
    icon: Github,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/youssefkhemira",
    icon: Linkedin,
  },
  {
    title: "Email",
    href: "mailto:youssef@khemira.cv",
    icon: Mail,
  },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <Link
            href="/"
            aria-label="go home"
            className="flex items-center gap-2"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
              YK
            </span>
            <span className="font-mono text-sm font-medium">
              Youssef KHEMIRA
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label={link.title}
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Youssef KHEMIRA. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
