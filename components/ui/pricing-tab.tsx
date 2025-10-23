"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PricingTabProps {
  frequencies: string[]
  frequency: string
  onFrequencyChange: (frequency: string) => void
}

export function PricingTab({
  frequencies,
  frequency,
  onFrequencyChange,
}: PricingTabProps) {
  return (
    <div className="relative flex rounded-lg bg-gray-100 p-1">
      {frequencies.map((freq) => (
        <button
          key={freq}
          onClick={() => onFrequencyChange(freq)}
          className={cn(
            "relative flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors inline-flex items-center justify-center whitespace-nowrap",
            frequency === freq
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          {freq === "monthly" ? "Monthly" : "Yearly"}
          {freq === "yearly" && (
            <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-600 whitespace-nowrap">
              Save 20%
            </span>
          )}
        </button>
      ))}
    </div>
  )
}