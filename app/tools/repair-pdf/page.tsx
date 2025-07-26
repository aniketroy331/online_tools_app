"use client"

import FileUpload from "@/components/file-upload"
import { PDFDocument } from "pdf-lib"

export default function RepairPDFPage() {
  const handleConvert = async (file: File) => {
    try {
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true })

      // Re-save the PDF to repair any issues
      const pdfBytes = await pdf.save()
      const blob = new Blob([pdfBytes], { type: "application/pdf" })
      const filename = file.name.replace(/\.[^/.]+$/, "") + "_repaired.pdf"
      return { blob, filename }
    } catch (error) {
      throw new Error("Failed to repair PDF. The file may be severely corrupted.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["application/pdf"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="Repair PDF"
        description="Repair corrupted or damaged PDF files"
      />
    </div>
  )
}
