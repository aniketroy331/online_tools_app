"use client"

import FileUpload from "@/components/file-upload"

export default function AVIToMP4Page() {
  const handleConvert = async (file: File) => {
    // Placeholder conversion - in a real app you'd use FFmpeg.wasm
    const blob = new Blob([await file.arrayBuffer()], { type: "video/mp4" })
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".mp4"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["video/x-msvideo", ".avi"]}
        maxFileSize={100 * 1024 * 1024} // 100MB
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="AVI to MP4 Converter"
        description="Convert AVI videos to MP4 format"
      />
    </div>
  )
}
