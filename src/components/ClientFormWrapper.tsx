'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ClientFormWrapperProps {
  children: React.ReactNode
}

export function ClientFormWrapper({ children }: ClientFormWrapperProps) {
  const [isClient, setIsClient] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)

    // Remove any fdprocessedid attributes that might have been added by form processing
    if (wrapperRef.current) {
      const elements = wrapperRef.current.querySelectorAll('[fdprocessedid]')
      elements.forEach(element => {
        element.removeAttribute('fdprocessedid')
      })
    }
  }, [])

  // During SSR and initial client render, return a div with suppressHydrationWarning
  return (
    <div ref={wrapperRef} suppressHydrationWarning>
      {/* Only render children after client-side hydration is complete */}
      {isClient ? children : null}
    </div>
  )
} 