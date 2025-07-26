"use client"

import FileUpload from "@/components/file-upload"
import { svgToPng } from "@/lib/converters"

export default function SVGToPNGPage() {
  const handleConvert = async (file: File) => {
    const blob = await svgToPng(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".png"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["image/svg+xml", ".svg"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="SVG to PNG Converter"
        description="Convert SVG vector images to PNG format"
      />
    </div>
  )
}
