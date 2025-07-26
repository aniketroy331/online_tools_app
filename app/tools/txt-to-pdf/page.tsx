"use client"

import FileUpload from "@/components/file-upload"
import { textToPDF } from "@/lib/converters"

export default function TXTToPDFPage() {
  const handleConvert = async (file: File) => {
    const blob = await textToPDF(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["text/plain", ".txt"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="TXT to PDF Converter"
        description="Convert text files to PDF format"
      />
    </div>
  )
}
