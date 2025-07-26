"use client"

import FileUpload from "@/components/file-upload"
import { PDFDocument } from "pdf-lib"

export default function OrganizePDFPagesPage() {
  const handleConvert = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer()
    const sourcePdf = await PDFDocument.load(arrayBuffer)
    const newPdf = await PDFDocument.create()

    const pageCount = sourcePdf.getPageCount()

    // Reverse page order as an example of organization
    for (let i = pageCount - 1; i >= 0; i--) {
      const [page] = await newPdf.copyPages(sourcePdf, [i])
      newPdf.addPage(page)
    }

    const pdfBytes = await newPdf.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_organized.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["application/pdf"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="Organize PDF Pages"
        description="Reorder and organize pages in your PDF document"
      />
    </div>
  )
}
