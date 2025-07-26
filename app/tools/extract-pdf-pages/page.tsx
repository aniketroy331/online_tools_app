"use client"

import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { extractPdfPages } from "@/lib/converters"

export default function ExtractPDFPagesPage() {
  const [pagesToExtract, setPagesToExtract] = useState("1,2,3")

  const handleConvert = async (file: File) => {
    const pageNumbers = pagesToExtract
      .split(",")
      .map((p) => Number.parseInt(p.trim()))
      .filter((p) => !isNaN(p))
    const blob = await extractPdfPages(file, pageNumbers)
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_extracted.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Extract PDF Pages</h1>
          <p className="text-gray-600">Extract specific pages from your PDF document</p>
        </div>

        <div className="mb-6">
          <Label htmlFor="pagesToExtract">Pages to Extract (comma-separated)</Label>
          <Input
            id="pagesToExtract"
            value={pagesToExtract}
            onChange={(e) => setPagesToExtract(e.target.value)}
            placeholder="1,2,3"
            className="mt-2"
          />
          <p className="text-sm text-gray-500 mt-1">Example: 1,2,3 or 1-5</p>
        </div>

        <FileUpload
          acceptedFileTypes={["application/pdf"]}
          onFileSelect={() => {}}
          onConvert={handleConvert}
          title=""
          description=""
        />
      </div>
    </div>
  )
}
