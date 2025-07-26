"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, File, X, Download } from "lucide-react"
import { createZip } from "@/lib/converters"

export default function CompressZIPPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isCompressing, setIsCompressing] = useState(false)
  const [compressedFile, setCompressedFile] = useState<Blob | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles])
    setCompressedFile(null)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  })

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleCompress = async () => {
    if (files.length === 0) return

    setIsCompressing(true)
    try {
      const zip = await createZip(files)
      setCompressedFile(zip)
    } catch (error) {
      console.error("Compression failed:", error)
    } finally {
      setIsCompressing(false)
    }
  }

  const handleDownload = () => {
    if (!compressedFile) return

    const url = URL.createObjectURL(compressedFile)
    const a = document.createElement("a")
    a.href = url
    a.download = "compressed.zip"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const totalSize = files.reduce((sum, file) => sum + file.size, 0)

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compress Files to ZIP</h1>
          <p className="text-gray-600">Compress multiple files into a single ZIP archive</p>
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
                {isDragActive ? "Drop files here" : "Drag & drop files here"}
              </p>
              <p className="text-gray-500">or click to select files</p>
            </div>

            {files.length > 0 && (
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">Files to compress ({files.length}):</h3>
                  <p className="text-sm text-gray-500">Total: {(totalSize / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <div className="max-h-60 overflow-y-auto space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <File className="h-6 w-6 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {compressedFile && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-green-800">Files compressed successfully!</p>
                    <p className="text-sm text-green-600">compressed.zip</p>
                  </div>
                  <Button onClick={handleDownload} className="bg-green-600 hover:bg-green-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download ZIP
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <Button
                onClick={handleCompress}
                disabled={files.length === 0 || isCompressing || !!compressedFile}
                className="flex-1"
              >
                {isCompressing ? "Compressing..." : `Compress ${files.length} Files`}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setFiles([])
                  setCompressedFile(null)
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
