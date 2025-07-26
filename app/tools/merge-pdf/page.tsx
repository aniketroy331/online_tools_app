"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, File, X, Download, ArrowUp, ArrowDown } from "lucide-react"
import { mergePDFs } from "@/lib/converters"

export default function MergePDFPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isConverting, setIsConverting] = useState(false)
  const [mergedFile, setMergedFile] = useState<Blob | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles])
    setMergedFile(null)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: true,
  })

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const moveFile = (index: number, direction: "up" | "down") => {
    const newFiles = [...files]
    const targetIndex = direction === "up" ? index - 1 : index + 1

    if (targetIndex >= 0 && targetIndex < files.length) {
      ;[newFiles[index], newFiles[targetIndex]] = [newFiles[targetIndex], newFiles[index]]
      setFiles(newFiles)
    }
  }

  const handleMerge = async () => {
    if (files.length < 2) return

    setIsConverting(true)
    try {
      const merged = await mergePDFs(files)
      setMergedFile(merged)
    } catch (error) {
      console.error("Merge failed:", error)
    } finally {
      setIsConverting(false)
    }
  }

  const handleDownload = () => {
    if (!mergedFile) return

    const url = URL.createObjectURL(mergedFile)
    const a = document.createElement("a")
    a.href = url
    a.download = "merged.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Merge PDF Files</h1>
          <p className="text-gray-600">Combine multiple PDF files into a single document</p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                {isDragActive ? "Drop PDF files here" : "Drag & drop PDF files here"}
              </p>
              <p className="text-gray-500">or click to select files</p>
            </div>

            {files.length > 0 && (
              <div className="mt-6 space-y-2">
                <h3 className="font-medium text-gray-900">Files to merge ({files.length}):</h3>
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <File className="h-6 w-6 text-red-600" />
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" onClick={() => moveFile(index, "up")} disabled={index === 0}>
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveFile(index, "down")}
                        disabled={index === files.length - 1}
                      >
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {mergedFile && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-green-800">PDFs merged successfully!</p>
                    <p className="text-sm text-green-600">merged.pdf</p>
                  </div>
                  <Button onClick={handleDownload} className="bg-green-600 hover:bg-green-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <Button
                onClick={handleMerge}
                disabled={files.length < 2 || isConverting || !!mergedFile}
                className="flex-1"
              >
                {isConverting ? "Merging..." : `Merge ${files.length} PDFs`}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setFiles([])
                  setMergedFile(null)
                }}
              >
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
