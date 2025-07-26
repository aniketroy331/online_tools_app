"use client"

import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

export default function EditPDFPage() {
  const [textToAdd, setTextToAdd] = useState("")
  const [xPosition, setXPosition] = useState(50)
  const [yPosition, setYPosition] = useState(50)

  const handleConvert = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer()
    const pdf = await PDFDocument.load(arrayBuffer)
    const pages = pdf.getPages()
    const firstPage = pages[0]

    if (textToAdd && firstPage) {
      const font = await pdf.embedFont(StandardFonts.Helvetica)

      firstPage.drawText(textToAdd, {
        x: xPosition,
        y: firstPage.getSize().height - yPosition,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      })
    }

    const pdfBytes = await pdf.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_edited.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit PDF</h1>
          <p className="text-gray-600">Add text and edit your PDF documents</p>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <Label htmlFor="textToAdd">Text to Add</Label>
            <Textarea
              id="textToAdd"
              value={textToAdd}
              onChange={(e) => setTextToAdd(e.target.value)}
              placeholder="Enter text to add to PDF"
              className="mt-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="xPosition">X Position</Label>
              <Input
                id="xPosition"
                type="number"
                value={xPosition}
                onChange={(e) => setXPosition(Number(e.target.value))}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="yPosition">Y Position</Label>
              <Input
                id="yPosition"
                type="number"
                value={yPosition}
                onChange={(e) => setYPosition(Number(e.target.value))}
                className="mt-2"
              />
            </div>
          </div>
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
