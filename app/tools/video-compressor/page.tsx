"use client"

import { useState } from "react"
import FileUpload from "@/components/file-upload"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Video, Zap, HardDrive, Clock } from "lucide-react"
import { compressVideo } from "@/lib/converters"

export default function VideoCompressorPage() {
  const [quality, setQuality] = useState([0.7])
  const [originalSize, setOriginalSize] = useState<number | null>(null)

  const handleConvert = async (file: File) => {
    setOriginalSize(file.size)
    const blob = await compressVideo(file, quality[0])
    const filename =
      file.name.replace(/\.[^/.]+$/, "") + "_compressed" + file.name.substring(file.name.lastIndexOf("."))
    return { blob, filename }
  }

  const getQualityLabel = (value: number) => {
    if (value >= 0.8) return "High Quality"
    if (value >= 0.6) return "Medium Quality"
    if (value >= 0.4) return "Low Quality"
    return "Very Low Quality"
  }

  const getQualityColor = (value: number) => {
    if (value >= 0.8) return "bg-green-100 text-green-800"
    if (value >= 0.6) return "bg-yellow-100 text-yellow-800"
    if (value >= 0.4) return "bg-orange-100 text-orange-800"
    return "bg-red-100 text-red-800"
  }

  const estimatedReduction = Math.round((1 - quality[0]) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-blue-50 py-8 pt-20">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-violet-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Video className="h-10 w-10 text-violet-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Video Compressor</h1>
          <p className="text-gray-600 text-lg">Reduce video file size while maintaining quality</p>
        </div>

        {/* Settings Card */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Compression Settings</h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Label className="text-lg font-medium text-gray-900">Quality Level</Label>
                  <Badge className={getQualityColor(quality[0])}>{getQualityLabel(quality[0])}</Badge>
                </div>

                <Slider value={quality} onValueChange={setQuality} max={1} min={0.1} step={0.1} className="w-full" />

                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>Smallest File</span>
                  <span>Best Quality</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Quality</h4>
                  <p className="text-sm text-gray-600">{Math.round(quality[0] * 100)}%</p>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <HardDrive className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Size Reduction</h4>
                  <p className="text-sm text-gray-600">~{estimatedReduction}%</p>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Processing</h4>
                  <p className="text-sm text-gray-600">Fast</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Upload */}
        <FileUpload
          acceptedFileTypes={["video/mp4", "video/avi", "video/mov", "video/webm", "video/mkv"]}
          maxFileSize={500 * 1024 * 1024} // 500MB
          onFileSelect={(file) => setOriginalSize(file.size)}
          onConvert={handleConvert}
          title="Upload Video File"
          description="Select a video file to compress. Supports MP4, AVI, MOV, WEBM, and MKV formats."
        />

        {/* Info Section */}
        <Card className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Video Compression Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">When to Use High Quality (80-100%)</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Professional presentations</li>
                  <li>• Important recordings</li>
                  <li>• Content for large screens</li>
                  <li>• Minimal file size reduction needed</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">When to Use Lower Quality (40-70%)</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Web uploads and streaming</li>
                  <li>• Email attachments</li>
                  <li>• Social media content</li>
                  <li>• Mobile device storage</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Pro Tips</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Higher quality settings preserve more detail but result in larger files</li>
                <li>• For web use, 60-70% quality usually provides the best balance</li>
                <li>• Test different settings to find your optimal quality/size ratio</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
