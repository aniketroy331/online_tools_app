"use client"

import FileUpload from "@/components/file-upload"
import { convertImage } from "@/lib/converters"

export default function JPGToPNGPage() {
  const handleConvert = async (file: File) => {
    const blob = await convertImage(file, "png")
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".png"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["image/jpeg", "image/jpg"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="JPG to PNG Converter"
        description="Convert JPG images to PNG format with transparency support"
      />
    </div>
  )
}
