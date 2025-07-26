"use client"

import FileUpload from "@/components/file-upload"
import { addPageNumbersToPdf } from "@/lib/converters"

export default function AddPageNumbersPage() {
  const handleConvert = async (file: File) => {
    const blob = await addPageNumbersToPdf(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_numbered.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <FileUpload
        acceptedFileTypes={["application/pdf"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="Add Page Numbers"
        description="Add page numbers to your PDF document"
      />
    </div>
  )
}
