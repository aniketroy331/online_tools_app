"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Download, QrCode, Smartphone, LinkIcon, Mail } from "lucide-react"
import { generateQRCode } from "@/lib/converters"

export default function QRGeneratorPage() {
  const [text, setText] = useState("")
  const [qrBlob, setQrBlob] = useState<Blob | null>(null)
  const [qrUrl, setQrUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [size, setSize] = useState(256)

  const quickPresets = [
    { label: "Website URL", icon: LinkIcon, value: "https://onlinetoolsapp.netlify.app/" },
    { label: "Email", icon: Mail, value: "mailto:contact@example.com" },
    { label: "Phone", icon: Smartphone, value: "tel:+1234567890" },
    { label: "WiFi", icon: QrCode, value: "WIFI:T:WPA;S:NetworkName;P:password;;" },
  ]

  const handleGenerate = async () => {
    if (!text.trim()) return

    setIsGenerating(true)
    try {
      const blob = await generateQRCode(text, { size, format: "png" })
      setQrBlob(blob)

      // Create preview URL
      if (qrUrl) {
        URL.revokeObjectURL(qrUrl)
      }
      const url = URL.createObjectURL(blob)
      setQrUrl(url)
    } catch (error) {
      console.error("QR generation failed:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (!qrBlob) return

    const url = URL.createObjectURL(qrBlob)
    const a = document.createElement("a")
    a.href = url
    a.download = `qr-code-${Date.now()}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handlePreset = (value: string) => {
    setText(value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-8 pt-20">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <QrCode className="h-10 w-10 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">QR Code Generator</h1>
          <p className="text-gray-600 text-lg">Create custom QR codes for URLs, text, contacts, and more</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="text" className="text-lg font-semibold text-gray-900">
                    Content
                  </Label>
                  <Textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text, URL, email, or any content..."
                    className="mt-2 min-h-32 resize-none border-2 border-gray-200 focus:border-purple-400 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="size" className="text-lg font-semibold text-gray-900">
                    Size (pixels)
                  </Label>
                  <Input
                    id="size"
                    type="number"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    min="128"
                    max="1024"
                    className="mt-2 border-2 border-gray-200 focus:border-purple-400 rounded-xl"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold text-gray-900 block mb-3">Quick Presets</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {quickPresets.map((preset, index) => {
                      const IconComponent = preset.icon
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          onClick={() => handlePreset(preset.value)}
                          className="flex items-center gap-2 p-3 h-auto text-left hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
                        >
                          <IconComponent className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">{preset.label}</span>
                        </Button>
                      )
                    })}
                  </div>
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!text.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isGenerating ? "Generating..." : "Generate QR Code"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>

                {qrUrl ? (
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-2 border-gray-100 inline-block">
                      <img
                        src={qrUrl || "/placeholder.svg"}
                        alt="Generated QR Code"
                        className="w-64 h-64 object-contain mx-auto"
                      />
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Size: {size}x{size} pixels
                      </p>
                      <p className="text-sm text-gray-600">Format: PNG</p>
                    </div>

                    <Button
                      onClick={handleDownload}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download QR Code
                    </Button>
                  </div>
                ) : (
                  <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
                    <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Your QR code will appear here</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">QR Code Uses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <LinkIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Websites</h4>
                <p className="text-sm text-gray-600">Link to your website or landing page</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Contact Info</h4>
                <p className="text-sm text-gray-600">Share email or phone numbers</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <QrCode className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">WiFi Access</h4>
                <p className="text-sm text-gray-600">Quick WiFi network connection</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Apps</h4>
                <p className="text-sm text-gray-600">Link to app stores or downloads</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
