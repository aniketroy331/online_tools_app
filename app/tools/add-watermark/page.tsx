"use client"

import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addWatermarkToPdf } from "@/lib/converters"

export default function AddWatermarkPage() {
  const [watermarkText, setWatermarkText] = useState("CONFIDENTIAL")

  const handleConvert = async (file: File) => {
    const blob = await addWatermarkToPdf(file, watermarkText)
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_watermarked.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add Watermark</h1>
          <p className="text-gray-600">Add a watermark to your PDF document</p>
        </div>

        <div className="mb-6">
          <Label htmlFor="watermarkText">Watermark Text</Label>
          <Input
            id="watermarkText"
            value={watermarkText}
            onChange={(e) => setWatermarkText(e.target.value)}
            placeholder="Enter watermark text"
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
