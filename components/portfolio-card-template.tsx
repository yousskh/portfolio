"use client";

import { forwardRef, useImperativeHandle, useEffect, useState } from "react";

export type CardVariant = "dark" | "light";

interface PortfolioCardTemplateProps {
  userName: string;
  title: string;
  variant: CardVariant;
  onTextureReady: (dataUrl: string) => void;
}

export interface PortfolioCardTemplateRef {
  captureTexture: () => Promise<void>;
  exportCard: () => void;
}

const CANVAS_SIZE = 1376;

const PortfolioCardTemplate = forwardRef<PortfolioCardTemplateRef, PortfolioCardTemplateProps>(
  ({ userName, title, variant, onTextureReady }, ref) => {
    const [baseImage, setBaseImage] = useState<HTMLImageElement | null>(null);

    // Fond uni (noir ou blanc)
    const textColor = variant === "dark" ? "#ffffff" : "#000000";

    const captureTexture = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = CANVAS_SIZE;
      canvas.height = CANVAS_SIZE;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Fond uni
      ctx.fillStyle = variant === "dark" ? "#000000" : "#ffffff";
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      // Nom en bas à gauche
      const displayName = userName || "YOUSSEF KHEMIRA";
      ctx.fillStyle = textColor;
      ctx.font = 'normal 48px "Geist Mono", monospace';
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";

      // Remonte les textes pour meilleure visibilité
      const textX = 80;
      const textY = CANVAS_SIZE - 600;
      ctx.fillText(displayName.toUpperCase(), textX, textY);

      // Ligne d'université sur deux lignes si besoin
      ctx.font = 'normal 36px "Geist Mono", monospace';
      ctx.fillStyle = textColor;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      const universityY = textY + 60;
      const line1 = "Université de Technologie";
      const line2 = "de Compiègne";
      ctx.fillText(line1, textX, universityY);
      ctx.fillText(line2, textX, universityY + 44);

      const dataUrl = canvas.toDataURL("image/png");
      onTextureReady(dataUrl);
    };

    const exportCard = () => {
      // Même logique que captureTexture mais pour l'export
      const CROP_BOTTOM = 334;
      const EXPORT_HEIGHT = CANVAS_SIZE - CROP_BOTTOM;
      const fullCanvas = document.createElement("canvas");
      fullCanvas.width = CANVAS_SIZE;
      fullCanvas.height = CANVAS_SIZE;
      const fullCtx = fullCanvas.getContext("2d");
      if (!fullCtx) return;
      if (baseImage) {
        fullCtx.drawImage(baseImage, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
      } else {
        fullCtx.fillStyle = "#000000";
        fullCtx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      }
      const displayName = userName || "YOUSSEF KHEMIRA";
      fullCtx.fillStyle = textColor;
      fullCtx.font = 'normal 48px "Geist Mono", monospace';
      fullCtx.textAlign = "right";
      fullCtx.textBaseline = "middle";
      const textX = (CANVAS_SIZE / 2) - 55;
      const textY = CANVAS_SIZE - 400;
      fullCtx.fillText(displayName.toUpperCase(), textX, textY);
      const university = "Université de Technologie de Compiègne";
      fullCtx.font = 'normal 36px "Geist Mono", monospace';
      fullCtx.fillStyle = textColor;
      fullCtx.textAlign = "right";
      fullCtx.textBaseline = "middle";
      const universityY = textY + 60;
      fullCtx.fillText(university, textX, universityY);
      const exportCanvas = document.createElement("canvas");
      exportCanvas.width = CANVAS_SIZE;
      exportCanvas.height = EXPORT_HEIGHT;
      const exportCtx = exportCanvas.getContext("2d");
      if (!exportCtx) return;
      exportCtx.drawImage(
        fullCanvas,
        0, 0, CANVAS_SIZE, EXPORT_HEIGHT,
        0, 0, CANVAS_SIZE, EXPORT_HEIGHT
      );
      const dataUrl = exportCanvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.download = `portfolio-card-${userName || "card"}.png`;
      link.href = dataUrl;
      link.click();
    };

    useImperativeHandle(ref, () => ({
      captureTexture,
      exportCard,
    }));

    return null;
  }
);

PortfolioCardTemplate.displayName = "PortfolioCardTemplate";

export default PortfolioCardTemplate;
