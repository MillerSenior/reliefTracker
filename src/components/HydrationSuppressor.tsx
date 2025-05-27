'use client'
import { useEffect, useState } from 'react'

interface HydrationSuppressorProps {
  children: React.ReactNode
}

export function HydrationSuppressor({ children }: HydrationSuppressorProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // During SSR and initial client render, return a div with suppressHydrationWarning
  if (!isMounted) {
    return (
      <div suppressHydrationWarning>{children}</div>
    )
  }

  // After hydration is complete, return children directly
  return <>{children}</>
} 