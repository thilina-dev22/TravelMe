import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -20px 0px', // Trigger as soon as the top of the element is 20px above the bottom of the viewport
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 1000ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 1000ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  )
}
