"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, File, X, Download } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface FileUploadProps {
  acceptedFileTypes: string[]
  maxFileSize?: number
  onFileSelect: (file: File) => void
  onConvert: (file: File) => Promise<{ blob: Blob; filename: string }>
  title: string
  description: string
}

export default function FileUpload({
  acceptedFileTypes,
  maxFileSize = 10 * 1024 * 1024, // 10MB default
  onFileSelect,
  onConvert,
  title,
  description,
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [convertedFile, setConvertedFile] = useState<{ blob: Blob; filename: string } | null>(null)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (file) {
        setSelectedFile(file)
        setConvertedFile(null)
        setError(null)
        onFileSelect(file)
      }
    },
    [onFileSelect],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    maxSize: maxFileSize,
    multiple: false,
    onDropRejected: (rejectedFiles) => {
      const rejection = rejectedFiles[0]?.errors[0]
      if (rejection?.code === "file-too-large") {
        setError(`File is too large. Maximum size is ${maxFileSize / 1024 / 1024}MB`)
      } else if (rejection?.code === "file-invalid-type") {
        setError(`Invalid file type. Accepted types: ${acceptedFileTypes.join(", ")}`)
      }
    },
  })

  const handleConvert = async () => {
    if (!selectedFile) return

    setIsConverting(true)
    setProgress(0)
    setError(null)

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90))
      }, 100)

      const result = await onConvert(selectedFile)

      clearInterval(progressInterval)
      setProgress(100)
      setConvertedFile(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed")
    } finally {
      setIsConverting(false)
    }
  }

  const handleDownload = () => {
    if (!convertedFile) return

    const url = URL.createObjectURL(convertedFile.blob)
    const a = document.createElement("a")
    a.href = url
    a.download = convertedFile.filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleReset = () => {
    setSelectedFile(null)
    setConvertedFile(null)
    setError(null)
    setProgress(0)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          {!selectedFile ? (
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                {isDragActive ? "Drop the file here" : "Drag & drop a file here"}
              </p>
              <p className="text-gray-500 mb-4">or click to select a file</p>
              <p className="text-sm text-gray-400">Supported formats: {acceptedFileTypes.join(", ")}</p>
              <p className="text-sm text-gray-400">Maximum file size: {maxFileSize / 1024 / 1024}MB</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <File className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{selectedFile.name}</p>
                    <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleReset}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {isConverting && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Converting...</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {convertedFile && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-green-800">Conversion completed!</p>
                      <p className="text-sm text-green-600">{convertedFile.filename}</p>
                    </div>
                    <Button onClick={handleDownload} className="bg-green-600 hover:bg-green-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button onClick={handleConvert} disabled={isConverting || !!convertedFile} className="flex-1">
                  {isConverting ? "Converting..." : "Convert File"}
                </Button>
                <Button variant="outline" onClick={handleReset}>
                  Choose Another File
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
