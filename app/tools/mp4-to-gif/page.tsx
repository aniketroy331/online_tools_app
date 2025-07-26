"use client"

import FileUpload from "@/components/file-upload"
import { mp4ToGif } from "@/lib/convertergif"
import { useState } from "react"

export default function MP4ToGIFPage() {
  const [isConverting, setIsConverting] = useState(false)

  const handleConvert = async (file: File) => {
    setIsConverting(true)
    try {
      const blob = await mp4ToGif(file)
      const filename = file.name.replace(/\.[^/.]+$/, "") + ".gif"
      return { blob, filename }
    } catch (error) {
      console.error("Conversion failed:", error)
      throw error
    } finally {
      setIsConverting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["video/mp4"]}
        maxFileSize={100 * 1024 * 1024} // 100MB
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="MP4 to GIF Converter"
        description="Convert MP4 videos to animated GIF format"
        isConverting={isConverting}
      />
    </div>
  )
}