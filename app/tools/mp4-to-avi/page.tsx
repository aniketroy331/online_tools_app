"use client"

import FileUpload from "@/components/file-upload"

export default function MP4ToAVIPage() {
  const handleConvert = async (file: File) => {
    // Placeholder conversion - in a real app you'd use FFmpeg.wasm
    const blob = new Blob([await file.arrayBuffer()], { type: "video/x-msvideo" })
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".avi"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["video/mp4"]}
        maxFileSize={100 * 1024 * 1024} // 100MB
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="MP4 to AVI Converter"
        description="Convert MP4 videos to AVI format"
      />
    </div>
  )
}
