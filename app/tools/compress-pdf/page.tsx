"use client"

import FileUpload from "@/components/file-upload"
import { compressPdf } from "@/lib/converters"

export default function CompressPDFPage() {
  const handleConvert = async (file: File) => {
    const blob = await compressPdf(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_compressed.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["application/pdf"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="Compress PDF"
        description="Reduce PDF file size while maintaining quality"
      />
    </div>
  )
}
