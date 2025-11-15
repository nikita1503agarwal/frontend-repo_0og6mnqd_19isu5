import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">
            New • Interactive 3D
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Create. Ship. Shine.
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
            I build modern, high-performance web experiences with delightful interactions and a focus on real-world impact.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 ring-1 ring-gray-200 px-5 py-3 text-sm font-medium hover:bg-gray-50">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden ring-1 ring-gray-200/60 bg-white/60">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
