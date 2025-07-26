"use client"

import FileUpload from "@/components/file-upload"
import { markdownToPdf } from "@/lib/converters"

export default function MarkdownToPDFPage() {
  const handleConvert = async (file: File) => {
    const blob = await markdownToPdf(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["text/markdown", ".md"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="Markdown to PDF Converter"
        description="Convert Markdown files to PDF format"
      />
    </div>
  )
}
