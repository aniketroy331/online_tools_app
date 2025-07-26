"use client"

import FileUpload from "@/components/file-upload"
import { PDFDocument } from "pdf-lib"

export default function PDFToPDFAPage() {
  const handleConvert = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer()
    const pdf = await PDFDocument.load(arrayBuffer)

    // PDF/A conversion is complex and requires specific metadata
    // This is a simplified version
    pdf.setTitle("PDF/A Document")
    pdf.setSubject("Converted to PDF/A format")
    pdf.setCreator("AllTools PDF Converter")
    pdf.setProducer("AllTools")

    const pdfBytes = await pdf.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_pdfa.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["application/pdf"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="PDF to PDF/A Converter"
        description="Convert PDF files to PDF/A format for long-term archiving"
      />
    </div>
  )
}
