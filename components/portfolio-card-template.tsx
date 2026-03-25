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

    const imageSrc = variant === "dark" ? "/card-portfolio-dark.png" : "/card-portfolio-light.png";
    const textColor = variant === "dark" ? "#ffffff" : "#000000";
    const subtitleColor = variant === "dark" ? "#a1a1aa" : "#71717a";

    useEffect(() => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => setBaseImage(img);
      img.src = imageSrc;
    }, [imageSrc]);

    const captureTexture = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = CANVAS_SIZE;
      canvas.height = CANVAS_SIZE;
      const ctx = canvas.getContext("2d");
      
      if (!ctx) return;

      // Draw base card image
      if (baseImage) {
        ctx.drawImage(baseImage, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
      } else {
        ctx.fillStyle = variant === "dark" ? "#0a0a0a" : "#ffffff";
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      }

      // Draw user name
      const displayName = userName || "YOUSSEF KHEMIRA";
      ctx.fillStyle = textColor;
      ctx.font = 'bold 56px "Geist", sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      const nameY = CANVAS_SIZE / 2 - 30;
      ctx.fillText(displayName.toUpperCase(), CANVAS_SIZE / 2, nameY);

      // Draw title
      const displayTitle = title || "Etudiant en Informatique";
      ctx.fillStyle = subtitleColor;
      ctx.font = '36px "Geist Mono", monospace';
      ctx.textAlign = "center";
      
      const titleY = nameY + 60;
      ctx.fillText(displayTitle, CANVAS_SIZE / 2, titleY);

      // Draw decorative line
      ctx.strokeStyle = variant === "dark" ? "#3b82f6" : "#2563eb";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(CANVAS_SIZE / 2 - 100, nameY - 50);
      ctx.lineTo(CANVAS_SIZE / 2 + 100, nameY - 50);
      ctx.stroke();

      const dataUrl = canvas.toDataURL("image/png");
      onTextureReady(dataUrl);
    };

    const exportCard = () => {
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
        fullCtx.fillStyle = variant === "dark" ? "#0a0a0a" : "#ffffff";
        fullCtx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      }

      const displayName = userName || "YOUSSEF KHEMIRA";
      fullCtx.fillStyle = textColor;
      fullCtx.font = 'bold 56px "Geist", sans-serif';
      fullCtx.textAlign = "center";
      fullCtx.textBaseline = "middle";
      
      const nameY = CANVAS_SIZE / 2 - 30;
      fullCtx.fillText(displayName.toUpperCase(), CANVAS_SIZE / 2, nameY);

      const displayTitle = title || "Etudiant en Informatique";
      fullCtx.fillStyle = subtitleColor;
      fullCtx.font = '36px "Geist Mono", monospace';
      fullCtx.textAlign = "center";
      
      const titleY = nameY + 60;
      fullCtx.fillText(displayTitle, CANVAS_SIZE / 2, titleY);

      fullCtx.strokeStyle = variant === "dark" ? "#3b82f6" : "#2563eb";
      fullCtx.lineWidth = 4;
      fullCtx.beginPath();
      fullCtx.moveTo(CANVAS_SIZE / 2 - 100, nameY - 50);
      fullCtx.lineTo(CANVAS_SIZE / 2 + 100, nameY - 50);
      fullCtx.stroke();

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
