"use client"

import FileUpload from "@/components/file-upload"

export default function WAVToMP3Page() {
  const handleConvert = async (file: File) => {
    // Placeholder conversion - in a real app you'd use Web Audio API
    const blob = new Blob([await file.arrayBuffer()], { type: "audio/mpeg" })
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".mp3"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["audio/wav", ".wav"]}
        maxFileSize={50 * 1024 * 1024} // 50MB
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="WAV to MP3 Converter"
        description="Convert WAV audio files to MP3 format"
      />
    </div>
  )
}
