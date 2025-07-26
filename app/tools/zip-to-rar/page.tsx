"use client"

import FileUpload from "@/components/file-upload"
import { zipToRar } from "@/lib/converters"

export default function ZIPToRARPage() {
  const handleConvert = async (file: File) => {
    const blob = await zipToRar(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".rar"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["application/zip", ".zip"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="ZIP to RAR Converter"
        description="Convert ZIP archives to RAR format"
      />
    </div>
  )
}
