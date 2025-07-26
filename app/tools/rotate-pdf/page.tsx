"use client"

import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { rotatePdf } from "@/lib/converters"

export default function RotatePDFPage() {
  const [rotation, setRotation] = useState(90)

  const handleConvert = async (file: File) => {
    const blob = await rotatePdf(file, rotation)
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_rotated.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rotate PDF</h1>
          <p className="text-gray-600">Rotate all pages in your PDF document</p>
        </div>

        <div className="mb-6">
          <Label>Rotation Angle</Label>
          <div className="flex gap-2 mt-2">
            <Button variant={rotation === 90 ? "default" : "outline"} onClick={() => setRotation(90)}>
              90°
            </Button>
            <Button variant={rotation === 180 ? "default" : "outline"} onClick={() => setRotation(180)}>
              180°
            </Button>
            <Button variant={rotation === 270 ? "default" : "outline"} onClick={() => setRotation(270)}>
              270°
            </Button>
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
