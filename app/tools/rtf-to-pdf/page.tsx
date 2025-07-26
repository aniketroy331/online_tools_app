"use client"

import FileUpload from "@/components/file-upload"
import { rtfToPdf } from "@/lib/converters"

export default function RTFToPDFPage() {
  const handleConvert = async (file: File) => {
    const blob = await rtfToPdf(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["application/rtf", ".rtf"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="RTF to PDF Converter"
        description="Convert Rich Text Format files to PDF"
      />
    </div>
  )
}
