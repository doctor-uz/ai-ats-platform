// ~/lib/pdf2img.ts
import {
  GlobalWorkerOptions,
  getDocument,
  type PDFDocumentProxy,
} from "pdfjs-dist";
// 💡 В CRA v4 удобнее всего указать CDN-воркер (иначе импорт воркера может упасть на webpack4)
GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js";

type PdfToImgResult =
  | { file: File; width: number; height: number }
  | { file: null; error: string };

export async function convertPdfToImage(
  pdfFile: File,
): Promise<PdfToImgResult> {
  try {
    // не выполняем на сервере/во время SSR
    if (typeof window === "undefined") {
      return { file: null, error: "PDF rendering is client-only" };
    }

    // динамический импорт, чтобы SSR не тянул pdfjs-dist
    const pdfjs: any = await import("pdfjs-dist");
    pdfjs.GlobalWorkerOptions.workerSrc =
      "https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js";

    if (!pdfFile || pdfFile.type !== "application/pdf") {
      return { file: null, error: "Not a PDF file" };
    }

    const loadingTask = pdfjs.getDocument({
      data: await pdfFile.arrayBuffer(),
    });
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);

    const viewport = page.getViewport({ scale: 2 });
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return { file: null, error: "Canvas 2D not supported" };

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx as any, viewport }).promise;

    const blob: Blob | null = await new Promise((resolve) =>
      canvas.toBlob((b) => resolve(b), "image/png"),
    );
    const out =
      blob ??
      (() => {
        const dataUrl = canvas.toDataURL("image/png");
        const byteString = atob(dataUrl.split(",")[1]);
        const mime = dataUrl.substring(5, dataUrl.indexOf(";"));
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++)
          ia[i] = byteString.charCodeAt(i);
        return new Blob([ab], { type: mime });
      })();

    const pngFile = new File(
      [out],
      `${pdfFile.name.replace(/\.pdf$/i, "")}.png`,
      {
        type: "image/png",
      },
    );

    return { file: pngFile, width: canvas.width, height: canvas.height };
  } catch (e: any) {
    console.error("convertPdfToImage error:", e);
    return { file: null, error: e?.message || "Unknown error" };
  }
}
