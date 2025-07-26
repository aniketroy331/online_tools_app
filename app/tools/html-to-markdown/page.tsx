"use client"

import FileUpload from "@/components/file-upload"
import { htmlToMarkdown } from "@/lib/converters"

export default function HTMLToMarkdownPage() {
  const handleConvert = async (file: File) => {
    const blob = await htmlToMarkdown(file)
    const filename = file.name.replace(/\.[^/.]+$/, "") + ".md"
    return { blob, filename }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <FileUpload
        acceptedFileTypes={["text/html", ".html", ".htm"]}
        onFileSelect={() => {}}
        onConvert={handleConvert}
        title="HTML to Markdown Converter"
        description="Convert HTML files to Markdown format"
      />
    </div>
  )
}
