"use client"

import FileUpload from "@/components/file-upload"
import { webpToPng } from "@/lib/converters"

export default function WEBPToPNGPage() {
  const handleConvert = async (file: File) => {
    const blob = await webpToPng(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".png"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["image/webp"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="WEBP to PNG Converter"
        description="Convert WEBP images to PNG format"
      />
    </div>
  )
}
