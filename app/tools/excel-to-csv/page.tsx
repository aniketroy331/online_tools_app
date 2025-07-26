"use client"

import FileUpload from "@/components/file-upload"
import { excelToCSV } from "@/lib/converters"

export default function ExcelToCSVPage() {
  const handleConvert = async (file: File) => {
    const blob = await excelToCSV(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".csv"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={[
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/vnd.ms-excel",
          ".xlsx",
          ".xls",
        ]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="Excel to CSV Converter"
        description="Convert Excel (XLSX/XLS) files to CSV format"
      />
    </div>
  )
}
