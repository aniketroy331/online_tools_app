"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, ArrowRight, Ruler, Weight, Thermometer } from "lucide-react"
import { convertUnits } from "@/lib/converters"

const unitCategories = {
  length: {
    name: "Length",
    icon: Ruler,
    units: {
      mm: "Millimeter",
      cm: "Centimeter",
      m: "Meter",
      km: "Kilometer",
      inch: "Inch",
      ft: "Foot",
      yard: "Yard",
      mile: "Mile",
    },
  },
  weight: {
    name: "Weight",
    icon: Weight,
    units: {
      mg: "Milligram",
      g: "Gram",
      kg: "Kilogram",
      oz: "Ounce",
      lb: "Pound",
      ton: "Ton",
    },
  },
  temperature: {
    name: "Temperature",
    icon: Thermometer,
    units: {
      celsius: "Celsius",
      fahrenheit: "Fahrenheit",
      kelvin: "Kelvin",
    },
  },
}

export default function UnitConverterPage() {
  const [category, setCategory] = useState<string>("length")
  const [fromUnit, setFromUnit] = useState<string>("m")
  const [toUnit, setToUnit] = useState<string>("ft")
  const [inputValue, setInputValue] = useState<string>("1")
  const [result, setResult] = useState<number | null>(null)

  const handleConvert = () => {
    const value = Number.parseFloat(inputValue)
    if (isNaN(value)) return

    const convertedValue = convertUnits(value, fromUnit, toUnit, category)
    setResult(convertedValue)
  }

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
    const units = Object.keys(unitCategories[newCategory as keyof typeof unitCategories].units)
    setFromUnit(units[0])
    setToUnit(units[1] || units[0])
    setResult(null)
  }

  const swapUnits = () => {
    const temp = fromUnit
    setFromUnit(toUnit)
    setToUnit(temp)
    if (result !== null) {
      setInputValue(result.toString())
      const value = Number.parseFloat(inputValue)
      if (!isNaN(value)) {
        const convertedValue = convertUnits(value, toUnit, fromUnit, category)
        setResult(convertedValue)
      }
    }
  }

  const currentCategory = unitCategories[category as keyof typeof unitCategories]
  const IconComponent = currentCategory.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 py-8 pt-20">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-emerald-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calculator className="h-10 w-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Unit Converter</h1>
          <p className="text-gray-600 text-lg">Convert between different units of measurement instantly</p>
        </div>

        {/* Category Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {Object.entries(unitCategories).map(([key, cat]) => {
            const CategoryIcon = cat.icon
            return (
              <Card
                key={key}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  category === key
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl"
                    : "bg-white/80 backdrop-blur-sm hover:shadow-lg"
                }`}
                onClick={() => handleCategoryChange(key)}
              >
                <CardContent className="p-6 text-center">
                  <CategoryIcon
                    className={`h-8 w-8 mx-auto mb-3 ${category === key ? "text-white" : "text-gray-600"}`}
                  />
                  <h3 className={`font-semibold ${category === key ? "text-white" : "text-gray-900"}`}>{cat.name}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Converter */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-end">
              {/* From Value */}
              <div className="lg:col-span-1">
                <Label htmlFor="inputValue" className="text-lg font-semibold text-gray-900">
                  Value
                </Label>
                <Input
                  id="inputValue"
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter value"
                  className="mt-2 border-2 border-gray-200 focus:border-emerald-400 rounded-xl text-lg"
                />
              </div>

              {/* From Unit */}
              <div className="lg:col-span-1">
                <Label className="text-lg font-semibold text-gray-900">From</Label>
                <Select value={fromUnit} onValueChange={setFromUnit}>
                  <SelectTrigger className="mt-2 border-2 border-gray-200 focus:border-emerald-400 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(currentCategory.units).map(([key, name]) => (
                      <SelectItem key={key} value={key}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Swap Button */}
              <div className="lg:col-span-1 flex justify-center">
                <Button
                  onClick={swapUnits}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-2 border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200 bg-transparent"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* To Unit */}
              <div className="lg:col-span-1">
                <Label className="text-lg font-semibold text-gray-900">To</Label>
                <Select value={toUnit} onValueChange={setToUnit}>
                  <SelectTrigger className="mt-2 border-2 border-gray-200 focus:border-emerald-400 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(currentCategory.units).map(([key, name]) => (
                      <SelectItem key={key} value={key}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Convert Button */}
              <div className="lg:col-span-1">
                <Button
                  onClick={handleConvert}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Convert
                </Button>
              </div>
            </div>

            {/* Result */}
            {result !== null && (
              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border-2 border-emerald-100">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 text-2xl font-bold text-gray-900">
                    <span>
                      {inputValue} {currentCategory.units[fromUnit as keyof typeof currentCategory.units]}
                    </span>
                    <ArrowRight className="h-6 w-6 text-emerald-600" />
                    <span className="text-emerald-600">
                      {result.toFixed(6)} {currentCategory.units[toUnit as keyof typeof currentCategory.units]}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Conversions */}
        <Card className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Common Conversions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Length</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>1 meter = 3.28084 feet</p>
                  <p>1 inch = 2.54 cm</p>
                  <p>1 mile = 1.60934 km</p>
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Weight</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>1 kg = 2.20462 pounds</p>
                  <p>1 ounce = 28.3495 grams</p>
                  <p>1 ton = 1000 kg</p>
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Temperature</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>0°C = 32°F</p>
                  <p>100°C = 212°F</p>
                  <p>0K = -273.15°C</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
