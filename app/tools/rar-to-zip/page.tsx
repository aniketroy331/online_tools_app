"use client"

import FileUpload from "@/components/file-upload"
import { rarToZip } from "@/lib/converters"

export default function RARToZIPPage() {
  const handleConvert = async (file: File) => {
    const blob = await rarToZip(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".zip"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["application/x-rar-compressed", ".rar"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="RAR to ZIP Converter"
        description="Convert RAR archives to ZIP format"
      />
    </div>
  )
}
