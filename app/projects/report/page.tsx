import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import { Suspense } from "react";

export const dynamic = "force-static";

function getPdfPath(file: string) {
  // Only allow files from the resources folder
  const safePath = path.join(process.cwd(), "resources", file);
  if (!safePath.startsWith(path.join(process.cwd(), "resources"))) {
    throw new Error("Invalid file path");
  }
  return safePath;
}

export default async function ReportPage({ searchParams }: { searchParams: { file?: string } }) {
  const file = searchParams?.file;
  if (!file) return notFound();

  // Only allow .pdf files
  if (!file.endsWith(".pdf")) return notFound();

  // Check if file exists
  const pdfPath = getPdfPath(file);
  if (!fs.existsSync(pdfPath)) return notFound();

  // Build the public URL for the PDF
  const pdfUrl = `/resources/${file}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold mb-6">Rapport PDF</h1>
      <div className="w-full max-w-4xl aspect-[4/3] bg-black/10 border rounded-xl overflow-hidden shadow-lg">
        <Suspense fallback={<div className="flex items-center justify-center h-full">Chargement du PDF…</div>}>
          <iframe
            src={pdfUrl}
            title="Rapport PDF"
            className="w-full h-full min-h-[600px]"
            style={{ border: 0 }}
            allowFullScreen
          />
        </Suspense>
      </div>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="mt-6 underline text-primary">Télécharger le PDF</a>
    </div>
  );
}
