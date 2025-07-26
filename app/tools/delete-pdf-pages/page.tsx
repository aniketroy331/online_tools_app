"use client"

import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { deletePdfPages } from "@/lib/converters"

export default function DeletePDFPagesPage() {
  const [pagesToDelete, setPagesToDelete] = useState("1,3,5")

  const handleConvert = async (file: File) => {
    const pageNumbers = pagesToDelete
      .split(",")
      .map((p) => Number.parseInt(p.trim()))
      .filter((p) => !isNaN(p))
    const blob = await deletePdfPages(file, pageNumbers)
    const filename = file.name.replace(/\.[^/.]+$/, "") + "_pages_deleted.pdf"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Delete PDF Pages</h1>
          <p className="text-gray-600">Remove specific pages from your PDF document</p>
        </div>

        <div className="mb-6">
          <Label htmlFor="pagesToDelete">Pages to Delete (comma-separated)</Label>
          <Input
            id="pagesToDelete"
            value={pagesToDelete}
            onChange={(e) => setPagesToDelete(e.target.value)}
            placeholder="1,3,5"
            className="mt-2"
          />
          <p className="text-sm text-gray-500 mt-1">Example: 1,3,5 or 2-4,7</p>
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
