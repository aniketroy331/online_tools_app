"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search,  Combine,  Split, Shrink,  FileEdit, RotateCcw,  FileX,  FileOutput, LayoutList, Wrench, Droplet,  ListOrdered,  Crop, Signature,  BadgeCheck, FileText, FileImage,  ImageIcon,  Video,  Film, SlidersHorizontal,  Music,  Archive,  Table,  Code2,  Clapperboard, Replace, Activity, QrCode, Zap } from "lucide-react"

const allTools = [
  // PDF Tools
  { name: "Merge PDF", path: "/tools/merge-pdf", category: "PDF Tools", icon: Combine },
  { name: "Split PDF", path: "/tools/split-pdf", category: "PDF Tools", icon: Split },
  { name: "Compress PDF", path: "/tools/compress-pdf", category: "PDF Tools", icon:Shrink},
  { name: "Edit PDF", path: "/tools/edit-pdf", category: "PDF Tools", icon: FileEdit },
  { name: "Rotate PDF", path: "/tools/rotate-pdf", category: "PDF Tools", icon: RotateCcw },
  { name: "Delete PDF Pages", path: "/tools/delete-pdf-pages", category: "PDF Tools", icon: FileX},
  { name: "Extract PDF Pages", path: "/tools/extract-pdf-pages", category: "PDF Tools", icon: FileOutput },
  { name: "Organize PDF Pages", path: "/tools/organize-pdf-pages", category: "PDF Tools", icon: LayoutList},
  { name: "Repair PDF", path: "/tools/repair-pdf", category: "PDF Tools", icon: Wrench },
  { name: "Add Watermark", path: "/tools/add-watermark", category: "PDF Tools", icon: Droplet },
  { name: "Add Page Numbers", path: "/tools/add-page-numbers", category: "PDF Tools", icon: ListOrdered },
  { name: "Crop PDF", path: "/tools/crop-pdf", category: "PDF Tools", icon: Crop },
  { name: "Sign PDF", path: "/tools/sign-pdf", category: "PDF Tools", icon: Signature },
  // { name: "Compare PDFs", path: "/tools/compare-pdfs", category: "PDF Tools", icon: FileText },
  { name: "PDF to PDF/A", path: "/tools/pdf-to-pdfa", category: "PDF Tools", icon: BadgeCheck },

  // Image Tools
  { name: "JPG to PNG", path: "/tools/jpg-to-png", category: "Image Tools", icon: ImageIcon },
  { name: "PNG to JPG", path: "/tools/png-to-jpg", category: "Image Tools", icon: ImageIcon },
  { name: "WEBP to JPG", path: "/tools/webp-to-jpg", category: "Image Tools", icon: FileImage },
  { name: "WEBP to PNG", path: "/tools/webp-to-png", category: "Image Tools", icon: FileImage },
  { name: "SVG to PNG", path: "/tools/svg-to-png", category: "Image Tools", icon: ImageIcon },
  { name: "Image to PDF", path: "/tools/image-to-pdf", category: "Image Tools", icon: ImageIcon },
  // { name: "PDF to JPG", path: "/tools/pdf-to-jpg", category: "Image Tools", icon: ImageIcon },
  // { name: "PDF to PNG", path: "/tools/pdf-to-png", category: "Image Tools", icon: ImageIcon },

  // Video Tools
  { name: "MP4 to AVI", path: "/tools/mp4-to-avi", category: "Video Tools", icon: Video },
  { name: "AVI to MP4", path: "/tools/avi-to-mp4", category: "Video Tools", icon: Video },
  { name: "MOV to MP4", path: "/tools/mov-to-mp4", category: "Video Tools", icon: Video },
  { name: "MP4 to GIF", path: "/tools/mp4-to-gif", category: "Video Tools", icon: Film },
  // { name: "Video to MP3", path: "/tools/video-to-mp3", category: "Video Tools", icon: Video },
  { name: "Video Compressor", path: "/tools/video-compressor", category: "Video Tools", icon: SlidersHorizontal },

  // Audio Tools
  { name: "MP3 to WAV", path: "/tools/mp3-to-wav", category: "Audio Tools", icon: Music },
  { name: "WAV to MP3", path: "/tools/wav-to-mp3", category: "Audio Tools", icon: Music },
  // { name: "Audio Compressor", path: "/tools/audio-compressor", category: "Audio Tools", icon: Music },

  // Archive Tools
  { name: "ZIP to RAR", path: "/tools/zip-to-rar", category: "Archive Tools", icon: Archive },
  { name: "RAR to ZIP", path: "/tools/rar-to-zip", category: "Archive Tools", icon: Archive },
  { name: "Compress to ZIP", path: "/tools/compress-zip", category: "Archive Tools", icon: Archive },

  // Data Tools
  { name: "CSV to Excel", path: "/tools/csv-to-excel", category: "Data Tools", icon: Table },
  { name: "Excel to CSV", path: "/tools/excel-to-csv", category: "Data Tools", icon: Table },
  { name: "JSON to CSV", path: "/tools/json-to-csv", category: "Data Tools", icon: Table },
  { name: "HTML to Markdown", path: "/tools/html-to-markdown", category: "Data Tools", icon: Code2 },
  { name: "TXT to PDF", path: "/tools/txt-to-pdf", category: "Data Tools", icon: FileText },
  { name: "RTF to PDF", path: "/tools/rtf-to-pdf", category: "Data Tools", icon: FileText },
  { name: "Markdown to PDF", path: "/tools/markdown-to-pdf", category: "Data Tools", icon: Code2 },

  // Utility Tools
  { name: "QR Code Generator", path: "/tools/qr-generator", category: "Utility Tools", icon: QrCode },
  { name: "Unit Converter", path: "/tools/unit-converter", category: "Utility Tools", icon: Replace },
  { name: "BMI Converter", path: "/tools/bmi-calculator", category: "Utility Tools", icon: Activity },

  { name: "Movie Time", path: "/tools/movie-time", category: "Entertainment Tools", icon: Clapperboard },
]

const categoryColors = {
  "PDF Tools": "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-300",
  "Image Tools": "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300",
  "Video Tools": "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-300",
  "Audio Tools": "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300",
  "Archive Tools": "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300",
  "Data Tools": "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 border-indigo-300",
  "Utility Tools": "bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 border-pink-300",
  "Entertainment Tools": "bg-gradient-to-r from-red-200 to-red-300 text-red-900 border-red-400",
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTools = useMemo(() => {
    if (!searchQuery) return allTools
    return allTools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              All<span className="text-blue-600">Tools</span>
            </h1>
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">40+ Professional Tools</span>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Your ultimate destination for file conversion and processing. Transform documents, images, videos, audio
            files, and more with our powerful online tools - all free and secure.
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-lg mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
              <Input
                type="text"
                placeholder="Search tools here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-4 text-lg border-2 border-white/50 rounded-full focus:border-blue-400 focus:ring-4 focus:ring-blue-100 bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>No Registration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Secure & Private</span>
            </div>
          </div>
        </div>

        {/* Enhanced Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredTools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <Link key={index} href={tool.path}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                  <div className="absolute top-0 right-0 z-10">
                    <div
                      className={`text-xs px-3 py-1 rounded-bl-lg border-l border-b font-medium ${
                        categoryColors[tool.category as keyof typeof categoryColors]
                      }`}
                    >
                      {tool.category.replace(" Tools", "")}
                    </div>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-6 text-center">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-blue-700" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-900 transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">No tools found matching your search.</p>
            <p className="text-gray-400 text-sm mt-2">Try searching for PDF, Image, Video, or Audio tools</p>
          </div>
        )}

        {/* Enhanced Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AllTools?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the power of professional-grade file conversion tools, all in your browser
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant file conversions with our optimized algorithms. No waiting, no delays - just results.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Archive className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">100% Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                All processing happens locally in your browser. Your files never leave your device.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">No Limits</h3>
              <p className="text-gray-600 leading-relaxed">
                Convert unlimited files without registration, watermarks, or hidden fees.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[728px] h-[20px] md:h-[25px] mx-auto my-4 flex items-center justify-center rounded-lg bg-gray-100 overflow-hidden">
          <script
            type="text/javascript"
            src="//pl27117011.profitableratecpm.com/0e/5d/83/0e5d83ce392614afc8f95ab4acb6fd85.js"
          ></script>
        </div>



        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Files?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of users who trust AllTools for their file conversion needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                <span className="text-sm font-medium">⚡ Instant conversion</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                <span className="text-sm font-medium">🔒 Privacy first</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                <span className="text-sm font-medium">📱 Works everywhere</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[728px] h-[20px] md:h-[25px] mx-auto my-4 flex items-center justify-center rounded-lg bg-gray-100 overflow-hidden">
          <script
            type="text/javascript"
            src="//pl27117011.profitableratecpm.com/0e/5d/83/0e5d83ce392614afc8f95ab4acb6fd85.js"
          ></script>
        </div>
      </div>
    </div>
  )
}
