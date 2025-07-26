"use client"

import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { splitPDF } from "@/lib/converters"

export default function SplitPDFPage() {
  const [pageRanges, setPageRanges] = useState("1-3,5,7-9")

  const handleConvert = async (file: File) => {
    const blobs = await splitPDF(file, pageRanges)
    // Return the first split PDF for now
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_split.pdf"
    return { blob: blobs[0], filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Split PDF</h1>
          <p className="text-gray-600">Split PDF into multiple files by page ranges</p>
        </div>

        <div className="mb-6">
          <Label htmlFor="pageRanges">Page Ranges (e.g., 1-3,5,7-9)</Label>
          <Input
            id="pageRanges"
            value={pageRanges}
            onChange={(e) => setPageRanges(e.target.value)}
            placeholder="1-3,5,7-9"
            className="mt-2"
          />
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
