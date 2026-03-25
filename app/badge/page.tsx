import type { Metadata } from "next";
import PortfolioLanyard from "@/components/portfolio-lanyard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Badge 3D | Youssef KHEMIRA",
  description: "Badge interactif 3D de Youssef KHEMIRA - Étudiant en Informatique",
};

export default function BadgePage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Retour à l&apos;accueil
        </Link>
        
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Mon Badge 3D</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Interagissez avec mon badge personnel ! Vous pouvez le faire glisser et le faire tourner.
          </p>
        </div>
      </div>
      
      <PortfolioLanyard
        position={[0, 0, 20]}
        containerClassName="relative w-full h-[70vh] select-none"
        userName="Youssef KHEMIRA"
        title="Etudiant en Informatique"
        variant="dark"
      />
    </div>
  );
}
