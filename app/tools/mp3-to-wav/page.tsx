"use client"

import FileUpload from "@/components/file-upload"

export default function MP3ToWAVPage() {
  const handleConvert = async (file: File) => {
    // Placeholder conversion - in a real app you'd use Web Audio API
    const blob = new Blob([await file.arrayBuffer()], { type: "audio/wav" })
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".wav"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["audio/mpeg", "audio/mp3", ".mp3"]}
        maxFileSize={50 * 1024 * 1024} // 50MB
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="MP3 to WAV Converter"
        description="Convert MP3 audio files to WAV format"
      />
    </div>
  )
}
