"use client"

import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cropPdf } from "@/lib/converters"

export default function CropPDFPage() {
  const [cropBox, setCropBox] = useState({ x: 50, y: 50, width: 400, height: 600 })

  const handleConvert = async (file: File) => {
    const blob = await cropPdf(file, cropBox)
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_cropped.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Crop PDF</h1>
          <p className="text-gray-600">Crop your PDF pages to a specific area</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="x">X Position</Label>
            <Input
              id="x"
              type="number"
              value={cropBox.x}
              onChange={(e) => setCropBox({ ...cropBox, x: Number(e.target.value) })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="y">Y Position</Label>
            <Input
              id="y"
              type="number"
              value={cropBox.y}
              onChange={(e) => setCropBox({ ...cropBox, y: Number(e.target.value) })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="width">Width</Label>
            <Input
              id="width"
              type="number"
              value={cropBox.width}
              onChange={(e) => setCropBox({ ...cropBox, width: Number(e.target.value) })}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              type="number"
              value={cropBox.height}
              onChange={(e) => setCropBox({ ...cropBox, height: Number(e.target.value) })}
              className="mt-2"
            />
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
