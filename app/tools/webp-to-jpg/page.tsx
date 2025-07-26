"use client"

import FileUpload from "@/components/file-upload"
import { webpToJpg } from "@/lib/converters"

export default function WEBPToJPGPage() {
  const handleConvert = async (file: File) => {
    const blob = await webpToJpg(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".jpg"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["image/webp"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="WEBP to JPG Converter"
        description="Convert WEBP images to JPG format"
      />
    </div>
  )
}
