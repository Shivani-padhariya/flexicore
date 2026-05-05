"use client"

import { useState, useRef, type ChangeEvent } from "react"
import {
  Upload,
  Sparkles,
  Download,
  RotateCcw,
  Loader2,
  ImageIcon,
  Wand2,
} from "lucide-react"
import { products } from "@/lib/products-data"

const ROOM_TYPES = [
  "Kitchen",
  "Bathroom",
  "Living Room",
  "Reception / Lobby",
  "Retail Counter",
  "Office Workspace",
]

const STYLES = [
  "Modern Minimal",
  "Classic Luxury",
  "Scandinavian",
  "Industrial",
  "Coastal",
  "Mediterranean",
]

export function RoomMockupTool() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [selectedSurface, setSelectedSurface] = useState(products[0].slug)
  const [roomType, setRoomType] = useState(ROOM_TYPES[0])
  const [style, setStyle] = useState(STYLES[0])
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [showBefore, setShowBefore] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = (ev) => setUploadedImage(ev.target?.result as string)
    reader.readAsDataURL(file)
    setResult(null)
  }

  const handleGenerate = async () => {
    if (!imageFile) {
      alert("Please upload a room photo first.")
      return
    }

    setIsGenerating(true)
    setShowBefore(false)
    // Clear result to force UI update and show loader
    setResult(null) 

    try {
      console.log("Starting AI generation with:", {
        surface: selectedSurface,
        roomType,
        style,
        description: prompt
      })

      const formData = new FormData()
      formData.append("image", imageFile)
      formData.append("surface", selectedSurface)
      formData.append("roomType", roomType)
      formData.append("style", style)
      formData.append("description", prompt)

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001"
      const response = await fetch(`${apiUrl}/api/generate-room`, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`)
      }

      const data = await response.json()
      console.log("AI generation response:", data)

      if (data.success) {
        // Add cache-buster to force image refresh if URL is same
        setResult(`${data.generatedImageUrl}${data.generatedImageUrl.includes('?') ? '&' : '?'}t=${Date.now()}`)
      } else {
        alert(data.message || "Failed to generate mockup. Please try again.")
      }
    } catch (error) {
      console.error("Generation error:", error)
      alert("An error occurred during generation. Please make sure the backend server is running on port 5001.")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleReset = () => {
    setUploadedImage(null)
    setImageFile(null)
    setResult(null)
    setPrompt("")
  }

  return (
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
      {/* Controls */}
      <div className="bg-white border border-border rounded-sm p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            1. Upload your room photo
          </label>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="w-full aspect-video border-2 border-dashed border-border rounded-sm flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors bg-muted/30"
          >
            {uploadedImage ? (
              <img
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded room"
                className="w-full h-full object-cover rounded-sm"
              />
            ) : (
              <>
                <Upload className="w-8 h-8" />
                <span className="text-sm font-medium">
                  Click to upload room photo
                </span>
                <span className="text-xs">JPG or PNG, up to 10MB</span>
              </>
            )}
          </button>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            2. Select a Flexicore surface
          </label>
          <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
            {products.slice(0, 12).map((p) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => setSelectedSurface(p.slug)}
                className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ${
                  selectedSurface === p.slug
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-transparent hover:border-border"
                }`}
                title={p.name}
              >
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Room type
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full h-10 px-3 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {ROOM_TYPES.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full h-10 px-3 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {STYLES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            3. Describe the look (optional)
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            placeholder="e.g. warm natural light, gold fixtures, oak floor"
            className="w-full px-3 py-2 border border-border rounded-sm bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleGenerate}
            disabled={!uploadedImage || isGenerating}
            className="flex-1 h-12 bg-primary text-primary-foreground font-semibold rounded-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate Mockup
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="h-12 px-4 border border-border rounded-sm hover:bg-muted transition-colors"
            aria-label="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          <Wand2 className="w-3 h-3 inline mr-1" />
          Powered by Flexicore AI. Renders are previews only and may differ
          from the final product installation.
        </p>
      </div>

      {/* Result */}
      <div className="bg-muted/30 border border-border rounded-sm p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            AI-Generated Preview
          </h3>
          {result && (
            <div className="flex items-center gap-4">
              <button
                onClick={handleGenerate}
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <RotateCcw className="w-4 h-4" />
                Regenerate
              </button>
              <a
                href={result}
                target="_blank"
                rel="noopener noreferrer"
                download="flexicore-mockup.png"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          )}
        </div>

        <div className="flex-1 rounded-sm overflow-hidden bg-white relative min-h-[400px] flex items-center justify-center">
          {isGenerating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white z-10">
              <div className="relative">
                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                <Sparkles className="w-5 h-5 absolute inset-0 m-auto text-primary" />
              </div>
              <div className="text-center">
                <p className="font-semibold">Rendering your space</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Applying {products.find((p) => p.slug === selectedSurface)?.name}
                </p>
              </div>
            </div>
          )}

          {result ? (
            <div className="relative w-full h-full">
              <img
                src={(showBefore ? uploadedImage : result) || "/placeholder.svg"}
                alt={showBefore ? "Original room" : "AI room mockup"}
                className="w-full h-full object-cover"
              />
              <button
                onMouseDown={() => setShowBefore(true)}
                onMouseUp={() => setShowBefore(false)}
                onMouseLeave={() => setShowBefore(false)}
                className="absolute bottom-4 left-4 bg-black/60 text-white text-[10px] uppercase tracking-widest px-3 py-2 rounded-full backdrop-blur-md hover:bg-black/80 transition-colors"
              >
                Hold to see Before
              </button>
              {showBefore && (
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  Original
                </div>
              )}
            </div>
          ) : !isGenerating ? (
            <div className="flex flex-col items-center text-muted-foreground gap-3 p-6 text-center">
              <ImageIcon className="w-12 h-12" />
              <p className="text-sm">
                Upload a room photo and click Generate to see your space
                with Flexicore surfaces.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
