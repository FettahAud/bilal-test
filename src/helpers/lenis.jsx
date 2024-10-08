import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

const SmoothScroller = () => {
  useEffect(() => {
    ScrollTrigger.refresh()
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}

export default SmoothScroller
