import { useState } from 'react'

function Hero() {
  const [backend] = useState(import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000')
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-200 border border-blue-400/30 mb-4">
            AI for Inclusive Education
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            AiDUC
          </h1>
          <p className="mt-4 text-blue-100/90 max-w-2xl">
            Platform belajar yang inklusif untuk semua. Baca teks, tanya tutor, ubah format, dan dapatkan jalur belajar adaptif.
          </p>
          <div className="mt-6 text-xs text-blue-200/60">Backend: {backend}</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
