"use client"

import FileUpload from "@/components/file-upload"
import { imagesToPDF } from "@/lib/converters"

export default function ImageToPDFPage() {
  const handleConvert = async (file: File) => {
    const blob = await imagesToPDF([file])
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["image/jpeg", "image/png", "image/webp"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="Image to PDF Converter"
        description="Convert JPG, PNG, or WEBP images to PDF format"
      />
    </div>
  )
}
