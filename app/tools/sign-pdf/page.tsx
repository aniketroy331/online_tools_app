"use client"

import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

export default function SignPDFPage() {
  const [signatureText, setSignatureText] = useState("Aniket Roy")

  const handleConvert = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer()
    const pdf = await PDFDocument.load(arrayBuffer)
    const pages = pdf.getPages()
    const firstPage = pages[0]

    if (firstPage) {
      const font = await pdf.embedFont(StandardFonts.HelveticaOblique)
      const { height } = firstPage.getSize()

      // Add signature at bottom right
      firstPage.drawText(`Signed: ${signatureText}`, {
        x: 400,
        y: 50,
        size: 12,
        font,
        color: rgb(0, 0, 0.8),
      })

      // Add signature date
      firstPage.drawText(`Date: ${new Date().toLocaleDateString()}`, {
        x: 400,
        y: 30,
        size: 10,
        font,
        color: rgb(0, 0, 0.8),
      })
    }

    const pdfBytes = await pdf.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_signed.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign PDF</h1>
          <p className="text-gray-600">Add your digital signature to PDF documents</p>
        </div>

        <div className="mb-6">
          <Label htmlFor="signatureText">Signature Name</Label>
          <Input
            id="signatureText"
            value={signatureText}
            onChange={(e) => setSignatureText(e.target.value)}
            placeholder="Enter your name"
            className="mt-2"
          />
        </div>

        <FileUpload
          acceptedFileTypes={["application/pdf"]}
          onFileSelect={() => {}}
          onConvert={handleConvert}
          title=""
          description=""
        />
      </div>
    </div>
  )
}
