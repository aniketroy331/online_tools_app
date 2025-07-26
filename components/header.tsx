import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Menu className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              All<span className="text-blue-600">ToolsRowdy</span>
            </span>
          </Link>

          {/* <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              PDF Tools
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Image Tools
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Video Tools
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Audio Tools
            </Link>
          </nav> */}

          <Button asChild variant="outline">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
