"use client"

import FileUpload from "@/components/file-upload"
import { convertImage } from "@/lib/converters"

export default function PNGToJPGPage() {
  const handleConvert = async (file: File) => {
    const blob = await convertImage(file, "jpeg")
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".jpg"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["image/png"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="PNG to JPG Converter"
        description="Convert PNG images to JPG format"
      />
    </div>
  )
}
