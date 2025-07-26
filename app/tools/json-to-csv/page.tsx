"use client"

import FileUpload from "@/components/file-upload"
import { jsonToCSV } from "@/lib/converters"

export default function JSONToCSVPage() {
  const handleConvert = async (file: File) => {
    const blob = await jsonToCSV(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".csv"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["application/json", ".json"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="JSON to CSV Converter"
        description="Convert JSON files to CSV format"
      />
    </div>
  )
}
