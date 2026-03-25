"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Lanyard from "@/components/ui/lanyard";
import PortfolioCardTemplate, { 
  type PortfolioCardTemplateRef, 
  type CardVariant 
} from "@/components/portfolio-card-template";

interface PortfolioLanyardProps {
  position?: [number, number, number];
  containerClassName?: string;
  userName?: string;
  title?: string;
  variant?: CardVariant;
}

export default function PortfolioLanyard({
  position = [0, 0, 20],
  containerClassName,
  userName = "Youssef KHEMIRA",
  title = "Etudiant en Informatique",
  variant = "dark",
}: PortfolioLanyardProps) {
  const [cardTextureUrl, setCardTextureUrl] = useState<string | undefined>(undefined);
  const [textureKey, setTextureKey] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const cardTemplateRef = useRef<PortfolioCardTemplateRef>(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (cardTemplateRef.current) {
        await cardTemplateRef.current.captureTexture();
      }
      setIsInitialized(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [userName, title, variant]);

  const handleTextureReady = useCallback((dataUrl: string) => {
    setCardTextureUrl(dataUrl);
    setTextureKey((prev) => prev + 1);
  }, []);

  if (!isInitialized) {
    return (
      <div className="flex flex-col">
        <PortfolioCardTemplate
          ref={cardTemplateRef}
          userName={userName}
          title={title}
          variant={variant}
          onTextureReady={handleTextureReady}
        />
        <div className={containerClassName}>
          <div className="flex h-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <PortfolioCardTemplate
        ref={cardTemplateRef}
        userName={userName}
        title={title}
        variant={variant}
        onTextureReady={handleTextureReady}
      />
      <Lanyard
        key={textureKey}
        position={position}
        containerClassName={containerClassName}
        cardTextureUrl={cardTextureUrl}
      />
    </div>
  );
}
