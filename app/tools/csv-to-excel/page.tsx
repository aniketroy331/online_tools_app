"use client"

import FileUpload from "@/components/file-upload"
import { csvToExcel } from "@/lib/converters"

export default function CSVToExcelPage() {
  const handleConvert = async (file: File) => {
    const blob = await csvToExcel(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".xlsx"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["text/csv", ".csv"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="CSV to Excel Converter"
        description="Convert CSV files to Excel (XLSX) format"
      />
    </div>
  )
}
