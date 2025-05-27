'use client'

import React from 'react'
import { ClientFormWrapper } from './ClientFormWrapper'

interface RadixWrapperProps {
  children: React.ReactNode
}

export function RadixWrapper({ children }: RadixWrapperProps) {
  return (
    <ClientFormWrapper>
      <div suppressHydrationWarning>
        {children}
      </div>
    </ClientFormWrapper>
  )
}

// Higher-order component for wrapping Radix components
export function withRadixWrapper<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithRadixWrapper(props: P) {
    return (
      <RadixWrapper>
        <WrappedComponent {...props} />
      </RadixWrapper>
    )
  }
} 